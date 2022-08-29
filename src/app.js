import  express  from "express";
import morgan from "morgan";
import cors from 'cors'

import UsersRoutes from './routes/user.routes'
const whitelist = ["http://localhost:3000",  "localhost", ]

const corsOptions = {
  origin: function(origin, callback){
      console.log(origin);
    if(whitelist.includes(origin)){
          callback(null, true);

      }else {
          callback(new Erro("Error de Cors"))
      }
  }
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'));
app.use(cors(corsOptions))


app.get('/',(req, res) => {
     res.json 
     (
        {
            author: 'Darly M. Vergara Álvarez',
            description: 'Project - technical test ',
            verison: 'Demo'
        }
    )

})

app.use('/user', UsersRoutes)

export default app;