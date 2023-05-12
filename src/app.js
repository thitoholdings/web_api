import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import authenticateToken from "./middleware/authentication.js";
import { signToken } from "./utils/authToken.js";
import path from "path";
import { fileURLToPath } from "url";
import { getAllIssues } from "./controllers/issues/index.js";
import * as routers from "./routes/index.js";
import expressStaticGzip from "express-static-gzip";
import compression from "compression";
import cron from "node-cron";
import { updateContext } from "./controllers/tasks/index.js";

dotenv.config({ path: "../.env" });

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use("/comments", routers.commentsRouter);
app.use("/issues", routers.issuesRouter);
app.use("/notifications", routers.notificationsRouter);
app.use("/users", routers.usersRouter);
app.use("/roles", routers.rolesRouter);
app.use("/utils", routers.utilsRouter);
app.use("/reports", routers.reportRouter);
app.use("/web_api/tasks", routers.tasksRouter);

app.post("/hello", authenticateToken, getAllIssues);

app.post("/login", (req, res) => {
  const user = req.params.id;

  const accessToken = signToken({ user });

  res.send({ accessToken, user });
});

app.get("/updateContext", async (req, res) => {
  const updateContex = await updateContext();

  res.send(updateContex);
});

let activeUsers = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, "../web/dist");
app.use(
  expressStaticGzip(buildPath, {
    enableBrotli: false, // only if you have brotli files too
  })
);
app.use(express.static(buildPath));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../web/dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.get("/", (req, res) => {
  res.send("API is running...");
});

cron.schedule("0 0 * * *", () => {
  updateContext()
    .then(() => console.log("context has been updated"))
    .catch((err) => console.log("an error has occured " + err));
});

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => console.log(`Listening to port ${PORT}`));

export default app;
