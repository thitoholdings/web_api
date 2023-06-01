import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import GlobalContext from "../context/GlobalContext";
import { getStoredAuthToken, getStoredUserInfo } from "./utils/authToken";

export default function Avatar() {
  const data = JSON.parse(getStoredAuthToken());

  return (
    <div>
      {/* <button onClick={() => console.log(data)}>Press Me</button> */}
      {data && (
        <div
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{ width: 100, height: 100, borderRadius: "100%" }}
            src={data.helpdesk_profile}
          />
          <h4
            style={{
              padding: 5,
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 5,
              marginTop: 5,
              fontSize: 13,
            }}
          >
            {data.first_name}
            {"  "}
            {data.last_name}
          </h4>
        </div>
      )}
    </div>
  );
}
