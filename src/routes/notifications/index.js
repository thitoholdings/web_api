import express from "express"
import * as notifications from "../../controllers/notifications/index.js"
import authenticateToken from "../../middleware/authentication.js"


const notificationsRouter  = express.Router()

notificationsRouter.post("/createNotification" , authenticateToken , notifications.createNotification)
notificationsRouter.post("/setReadNotification" ,authenticateToken , notifications.setReadNotification)
notificationsRouter.get("/getNotifications/:id",authenticateToken ,notifications.getNotifications)

export default notificationsRouter