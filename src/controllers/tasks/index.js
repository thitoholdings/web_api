import {
  handleInsert,
  handleQuery,
  handleUpdate,
  handleSelect,
  handleSelectJoin,
} from "../../utils/handle.js";
import catchErrors from "../../errors/catchErrors.js";
import _ from "lodash";

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
  const currentDate = new Date();

  // Extract the individual components of the date and time
  const year = currentDate.getFullYear(); // e.g. 2023
  const month = currentDate.getMonth() + 1; // Note: months are zero-indexed, so we add 1 to get the correct month
  const day = currentDate.getDate(); // e.g. 26
  const hours = currentDate.getHours(); // e.g. 10
  const minutes = currentDate.getMinutes(); // e.g. 30
  const seconds = currentDate.getSeconds(); // e.g. 45

  // Create a string in the format expected by MySQL DATETIME type: "YYYY-MM-DD HH:MM:SS"
  const mysqlDatetime = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  } ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
  console.log("Insert into context")
  const create = await handleInsert(
    {
      ...req.body,
      createdAt: mysqlDatetime,
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
