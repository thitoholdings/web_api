import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { getCompanyTitleAB, getStatusColor } from "./utils/getCompanyTitle";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          console.log(dayEvents);
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div key={idx}>
            <small
              onClick={() => console.log(evt)}
              style={{ color: evt.label }}
            >
              {evt.assignee}
            </small>
            <div
              key={idx}
              onClick={() => setSelectedEvent(evt)}
              className={`bg-${
                getStatusColor(evt.status) + "-600"
              } p-1 mr-3 text-white text-2xl rounded mb-1 truncate`}
            >
              <strong>{getCompanyTitleAB(evt.label)} </strong>
              {evt.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
