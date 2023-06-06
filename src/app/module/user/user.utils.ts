import User from "./user.module";

export const findLastUserId = async () => {
    const lastUser = await User
        .findOne({}, { id: 1, _id: 0 })
        .sort({
            createdAt: -1,
        })
        .lean()
    return lastUser?.id
}
export const generateUserId = async () => {
    const currentId = (await findLastUserId()) || '00000'
    const incrementedId = String(parseInt(currentId) + 1).padStart(5, '0')
    return incrementedId
}
