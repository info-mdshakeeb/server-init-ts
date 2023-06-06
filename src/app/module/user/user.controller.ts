import { RequestHandler } from "express";
import { UserServices } from "./user.service";

const getUsers: RequestHandler = async (req, res, next) => {
    try {
        const data = await UserServices.findUser()
        if (!data) return res.status(400).json({ success: false, message: 'User not found' })
        return res.status(201).json({ success: true, data: data })
    } catch (error) {
        next(error)
    }
}

const createUser: RequestHandler = async (req, res, next) => {
    const { user } = req.body
    try {
        const data = await UserServices.addUser(user)
        if (!data) return res.status(400).json({ success: false, message: 'User not created' })
        return res.status(201).json({ success: true, data: user })
    } catch (error) {
        next(error)
    }
}


export const UserController = {
    getUsers, createUser
}