import express from "express"
import { uploadFileAWS, uploadPhotos } from "../../controllers/utils/index.js"
import authenticateToken from "../../middleware/authentication.js"


const utilsRouter = express.Router()

utilsRouter.post("/uploadFile" , authenticateToken, uploadPhotos)
utilsRouter.post("/uploadFileAWS" , authenticateToken , uploadFileAWS)

export default utilsRouter