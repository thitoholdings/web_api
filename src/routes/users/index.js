import express from "express"
import * as users from "../../controllers/user/index.js"
import authenticateToken from "../../middleware/authentication.js"


const usersRouter = express.Router()

usersRouter.post("/authenticate" , users.authenticate)
usersRouter.post("/changeProfile" ,authenticateToken ,users.changeProfile) 
usersRouter.post("/sendOTP", users.sendOTP )
usersRouter.post("/createUser",authenticateToken , users.createUser)
usersRouter.post("/resetPassword" ,users.resetPassword)
usersRouter.get("/checkEmail/:email" , users.checkEmailAddress)
usersRouter.get("/getUsers/:type?", authenticateToken , users.getUsers)
export default usersRouter