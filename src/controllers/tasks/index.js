import {
  handleInsert,
  handleQuery,
  handleUpdate,
  handleSelect,
  handleSelectJoin,
} from "../../utils/handle.js";
import catchErrors from "../../errors/catchErrors.js";
import _ from "lodash";
import uploadPhoto from "../../utils/uploadPhoto.js";
import parser from "node-html-parser";
import moment from "moment";
import sendEmail from "../../utils/sendEmail.js";
import aws_upload from "../../utils/aws_upload.js";

export const createTask = catchErrors(async (req, res) => {
  const create = await handleInsert(
    {
      ...req.body,
    },
    "task_matrix"
  );

  res.send(create);
});
export const createContext = catchErrors(async (req, res) => {
  const create = await handleInsert(
    {
      ...req.body,
    },
    "task_context"
  );

  res.send(create);
});

export const getContext = catchErrors(async (req, res) => {
  console.log("getting context");
  const select = await handleQuery(
    "SELECT * FROM task_context ORDER BY id DESC LIMIT 1;"
  );

  res.send(select);
});
export const getTasks = catchErrors(async (req, res) => {
  const select = await handleSelect(null, "tasks");

  res.send(select);
});
