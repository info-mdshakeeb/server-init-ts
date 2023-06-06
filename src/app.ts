import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { userRoute } from './app/module/user/user.route'
import globalErrorHandler from './utils/globalErrorHandler'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//test server
// app.get('/', (req: Request, res: Response) => {
//     res.status(200).json({
//         success: true,
//         data: " Welcome to shakeeb's server",
//     })

// })

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    throw new Error("ercscx")
    next()
})
// custom routes :
app.use("/api/v1/user", userRoute)



app.use(globalErrorHandler)

export default app
