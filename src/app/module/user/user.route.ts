import express from "express"
import { UserController } from "./user.controller"

const router = express.Router()

router.get('/all-users', UserController.getUsers)
router.post('/create-user', UserController.createUser)

export const userRoute = router