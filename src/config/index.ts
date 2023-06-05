import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

const port = process.env.PORT
const DatabaseUrl = process.env.database_url
const defaultUserPass = process.env.DEFAULT_STUDENT_PASSWORD

export const Env = {
  port,
  DatabaseUrl,
  defaultUserPass,
}
