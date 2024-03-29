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

function currentDate() {
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

  return mysqlDatetime;
}

export const createContext = catchErrors(async (req, res) => {
  const create = await handleInsert(
    {
      ...req.body,
      createdAt: currentDate(),
    },
    "task_context"
  );

  res.send(create);
});

export const getContext = catchErrors(async (req, res) => {
  console.log("getting context");
  const select = await handleQuery(
    "SELECT * FROM helpdesk.task_context ORDER BY id DESC LIMIT 1;"
  );

  res.send(select);
});
export const getTasks = catchErrors(async (req, res) => {
  const select = await handleSelect(null, "tasks");

  res.send(select);
});

function isDateEarlier(date1) {
  const today = new Date();

  // Remove time component from today's date
  today.setHours(0, 0, 0, 0);

  // Compare date1 with today
  return date1 < today;
}

function updateStatus(data) {
  const currentDate = new Date();
  const oneMonthAgo = new Date().setMonth(currentDate.getDate() - 1);

  return JSON.stringify(
    data.map((item) => {
      const itemDate = new Date(item.day);
      if (
        isDateEarlier(itemDate) &&
        item.status != "backlog" &&
        item.status != "done"
      ) {
        return { ...item, status: "backlog" };
      } else {
        return item;
      }
    })
  );
}

export async function updateContext() {
  console.log("update context function");
  const lastContext = (
    await handleQuery(
      "SELECT * FROM helpdesk.task_context order by id desc limit 1"
    )
  )[0];

  //console.log(lastContext);
  const newContext = updateStatus(JSON.parse(lastContext.context));
  //console.log(newContext);

  return await handleInsert(
    { context: newContext, createdAt: currentDate() },
    "task_context"
  );
}
