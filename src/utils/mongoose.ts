import mongoose from 'mongoose'
import { Env } from '../config'
import { erLogger, logger } from './logger'

const connectMongoose = async () => {
    const url = Env.DatabaseUrl
    if (!url) {
        erLogger.error("database url is not found")
        return
    }
    try {
        await mongoose.connect(url).then(() =>
            logger.info("MongoDB connected"))
    } catch (error) {
        erLogger.error(error)
        process.exit(1)
    }
}
export default connectMongoose
