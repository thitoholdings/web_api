import express from 'express'
import * as reports from "../../controllers/reports/index.js"
import authenticateToken from '../../middleware/authentication.js'


const reportRouter = express.Router()

reportRouter.get('/reports' , reports.getReports)

export default reportRouter


