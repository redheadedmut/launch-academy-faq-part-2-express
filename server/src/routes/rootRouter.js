import express from "express"
import clientRouter from "./clientRouter.js"
import launchersRouter from "./api/v1/launchersRouter.js"
import questionsRouter from "./api/v1/questionsRouter.js"
import starwarsRouter from "./api/v1/starwarsRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/launchers", launchersRouter)
rootRouter.use("/api/v1/questions", questionsRouter)
rootRouter.use("/api/v1/space", starwarsRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
