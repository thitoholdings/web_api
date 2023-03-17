import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  updateStatusLabel: () => {},
  setStatus: () => {},
  status: [
    { label: "gray", checked: true },
    { label: "red", checked: true },
    { label: "yellow", checked: true },
    { label: "green", checked: true },
  ],
  filteredEvents: [],
});

export default GlobalContext;
