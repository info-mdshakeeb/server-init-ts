import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//test server
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: " Welcome to shakeeb's server",
  })
})

export default app
