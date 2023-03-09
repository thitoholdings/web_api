import express from "express";
import * as tasks from "../../controllers/tasks/index.js";

const tasksRouter = express.Router();

tasksRouter.post("/addTask", tasks.createTask);
tasksRouter.post("/addContext", tasks.createContext);
tasksRouter.get("/getTasks", tasks.getTasks);
tasksRouter.get("/getContext", tasks.getContext);

export default tasksRouter;
