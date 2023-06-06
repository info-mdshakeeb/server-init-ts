import { Env } from "../../../config";
import { IUser } from "./user.interface";
import User from "./user.module";
import { generateUserId } from "./user.utils";

const addUser = async (user: IUser): Promise<IUser | null> => {

    const id = await generateUserId()
    user.id = id
    if (!user?.password) {
        user.password = Env.defaultUserPass as string
    }
    const createUser = await User.create(user)
    if (!createUser) {
        throw Error("user is not created")
    }
    return createUser
}
const findUser = async () => {
    const users = await User.find()
    return users
}

//
export const UserServices = {
    addUser, findUser
}