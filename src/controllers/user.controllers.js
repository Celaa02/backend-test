import pool from "../db"

export const getUsers = async (req, res) => {
     const response = await pool.query('SELECT * FROM users');
     console.log(response.rows[0])
     if(response.rows[0] == undefined)
        {
            res.status(400).json('you are not have users saved')
            
            
        }else{
            res.status(200).json(response.rows)
        }
     
    
}

export const getUsersById = async (req, res) => {
    const id = req.params.id
    console.log(id)
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if(response.rows[0] == undefined){
            res.status(400).json('The id not exist, plis verify')
            }else{
                res.status(200).json(response.rows)
            }
       
    
   
}


export const postUsers = async (req, res) => {
   const body = req.body
   const {username, birthdate, identificatenum} = req.body
   const response = await pool.query('INSERT INTO users (username, birthdate, identificatenum) VALUES ($1, $2, $3)', [username, birthdate, identificatenum])
    res.json({
        message: 'User Added  Succesfully',
        body: {
            user: {username, birthdate, identificatenum}
        }

    })
    
}

export const patchUsers = async (req, res) => {
    try {
        const id = req.params.id
        const {username, birthdate, identificatenum} = req.body
        
            const response = await pool.query('UPDATE users SET username = $1 , birthdate = $2, identificatenum = $3 WHERE id = $4', [username, birthdate, identificatenum, id])
                res.json({
                    message: 'User Update  Succesfully'
                })
        
    } catch (error) {
        console.log('Verify the params of Body')
    }
    
}

export const deleteUsers = async (req, res) => {
    try { 
        const username = req.bady
        console.log(username)
    
            const response = await pool.query('DELETE FROM users')
                {
                    res.status(200).json('The users are delete Successfully')
                }
               
    } catch (error) {
        console.log(error)
    }
    
     
    
}