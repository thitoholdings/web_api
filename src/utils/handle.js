import connection, { connect } from "../database/config.js";

const handleQuery = async (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, rows, fields) => {
      if (err) return reject(err);
      if (rows) return resolve(rows);
      return reject([]);
    });
  });
};

const handleQuery2 = async (query) => {
  return new Promise((resolve, reject) => {
    connect.query(query, (err, rows, fields) => {
      if (err) return reject(err);
      if (rows) return resolve(rows);
      return reject([]);
    });
  });
};

function qouteString(variable) {
  if (typeof variable == "string") return JSON.stringify(variable);
  return variable;
}

function joinTable(table1, table2) {
  const id = table1.substring(0, table1.length - 1) + "Id";

  return ` join ${table2.toLowerCase()} on ${table1.toLowerCase()}.id = ${table2.toLowerCase()}.${id}`;
}

//TYPE CHECK FORMART OF INCOMING DATABASE , ESPECIALLY KEYS

const handleUpdate = (data, conditions, table) => {
  let queryStatement = `UPDATE ${table} SET`;

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      queryStatement += ` ${key} = ${qouteString(data[key])},`;
    }
  }
  queryStatement = queryStatement.slice(0, -1);
  queryStatement += ` WHERE`;

  for (var key in conditions) {
    if (conditions.hasOwnProperty(key)) {
      queryStatement += ` ${key} = ${qouteString(conditions[key])} AND`;
    }
  }
  queryStatement = queryStatement.slice(0, -4);
 // console.log(queryStatement);
  return handleQuery(queryStatement);
};

const handleSelect = (conditions, table) => {
  //join must be an array of specific tables

  let queryStatement = `SELECT * FROM ${table}`;

  if (conditions) {
    queryStatement += ` WHERE`;
    for (var key in conditions) {
      if (conditions.hasOwnProperty(key)) {
        queryStatement += ` ${key} = ${qouteString(conditions[key])} AND`;
      }
    }
    queryStatement = queryStatement.slice(0, -4);
  }

   //console.log(queryStatement)
  return handleQuery(queryStatement);
};

const handleSelectJoin = (conditions, join, table) => {
  //join must be an array of specific tables

  let queryStatement = `SELECT * FROM ${table}`;

  if (join) {
    join.forEach((element) => {
      queryStatement += joinTable(table, element);
    });
  }

  if (conditions) {
    queryStatement += ` WHERE`;
    for (var key in conditions) {
      if (conditions.hasOwnProperty(key)) {
        queryStatement += ` ${table}.${key} = ${qouteString(
          conditions[key]
        )} AND`;
      }
    }
    queryStatement = queryStatement.slice(0, -4);
  }

 // console.log(queryStatement);
  return handleQuery(queryStatement);
};

const handleInsert = (data, table) => {
  let queryStatement = `INSERT INTO ${table} (${Object.keys(
    data
  ).toString()}) VALUES (${Object.values(data)
    .map((item) => qouteString(item))
    .toString()})`;
  //console.log(queryStatement);
  return handleQuery(queryStatement);
};

const handleAuthentication = (user, pass) => {
  let queryStatement = `SELECT StaffAccount_0.*, dept.sub_department ,dept.department as dept FROM StaffAccount_0 
  join helpdesk.departments as dept
  on dept.id = StaffAccount_0.departmentId
  where email_address = '${user}' AND password = '${pass}'`

  return handleQuery2(queryStatement);
};

export {
  handleInsert,
  handleQuery,
  handleUpdate,
  handleSelect,
  handleSelectJoin,
  handleAuthentication,
  handleQuery2,
};
