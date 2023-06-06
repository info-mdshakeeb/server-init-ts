import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

const port = process.env.PORT
const DatabaseUrl = process.env.database_url
const defaultUserPass = process.env.DEFAULT_USER_PASSWORD
const NodeEnv = process.env.NODE_ENV

export const Env = {
    port,
    DatabaseUrl,
    defaultUserPass,
    NodeEnv
}
