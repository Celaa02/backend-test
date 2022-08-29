import { Router } from "express";
const router = Router();

import * as UserCtrl from '../controllers/user.controllers'

router.get('/', UserCtrl.getUsers)
router.get('/:id', UserCtrl.getUsersById)
router.post('/', UserCtrl.postUsers)
router.patch('/:id', UserCtrl.patchUsers)
router.delete('/', UserCtrl.deleteUsers)

export default router;
