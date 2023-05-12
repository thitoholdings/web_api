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
  loading: false,
  setLoading: () => {},
  labels: [],
  updateLabel: () => {},
  updateStatusLabel: () => {},
  setStatus: () => {},
  status: [],
  filteredEvents: [],
});

export default GlobalContext;
