import app from './app'
import { Env } from './config'
import { erLogger, logger } from './utils/logger'
import connectMongoose from './utils/mongoose'

const connectServer = async () => {
    try {
        connectMongoose()
        app.listen(Env.port, () =>
            logger.info(`server running ${Env.port}`)
        )
    } catch (error) {
        erLogger.error(`Error`)
    }
}
connectServer()
