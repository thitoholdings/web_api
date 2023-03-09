import express from "express";
import * as roles from "../../controllers/roles/index.js";
import authenticateToken from "../../middleware/authentication.js";

const rolesRouter = express.Router();

rolesRouter.get("/getDepartment", roles.getDepartments);

rolesRouter.get("/getSystems", roles.getIssueSystems);

rolesRouter.get("/getCompanies" , roles.getCompanies);

export default rolesRouter;
