import express from "express";
import * as comments from "../../controllers/comments/index.js";
import authenticateToken from "../../middleware/authentication.js";

const commentsRouter = express.Router();

commentsRouter.post("/addComment", authenticateToken, comments.createComment);
commentsRouter.post("/likeComment", authenticateToken, comments.likeComment);
commentsRouter.post("/editComment", authenticateToken, comments.editComment);
commentsRouter.get(
  "/getAllComments",
  authenticateToken,
  comments.getAllComments
);
commentsRouter.get(
  "/getCommentsForIssue/:issueId",
  authenticateToken,
  comments.getCommentsForIssue
);

export default commentsRouter;
