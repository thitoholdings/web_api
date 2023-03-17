import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import getCompanyTitle from "./utils/getCompanyTitle";

export default function Labels() {
  const { labels, updateLabel, status, updateStatus } =
    useContext(GlobalContext);

  const statusClasses = [
    { label: "gray", checked: true },
    { label: "red", checked: true },
    { label: "yellow", checked: true },
    { label: "green", checked: true },
  ];

  function switchStatus(color) {
    switch (color.toLocaleLowerCase()) {
      case "red":
        return "Backlog";
      case "gray":
        return "Open";
      case "yellow":
        return "In Progress";
      case "green":
        return "Done";
      default:
        return "Other";
    }
  }

  function TaskStatusLabel() {
    return (
      <div>
        <p className="text-gray-500 font-bold mt-10">Task Status</p>
        {statusClasses.map(({ label: lbl, checked }, idx) => (
          <label key={idx} className="items-center mt-3 block">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => updateLabel({ label: lbl, checked: !checked })}
              className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
            />
            <span className="ml-2 text-gray-700 capitalize">
              {switchStatus(lbl)}
            </span>
          </label>
        ))}
      </div>
    );
  }

  function CompanyLabel() {
    return (
      <div>
        <p className="text-gray-500 font-bold mt-10">Companies</p>
        {labels.map(({ label: lbl, checked }, idx) => (
          <label key={idx} className="items-center mt-3 block">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => updateLabel({ label: lbl, checked: !checked })}
              className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
            />
            <span className="ml-2 text-gray-700 capitalize">
              {getCompanyTitle(lbl)}
            </span>
          </label>
        ))}
      </div>
    );
  }

  return (
    <React.Fragment>
      <TaskStatusLabel />
      <CompanyLabel />
    </React.Fragment>
  );
}
