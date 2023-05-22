import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useLayoutEffect,
} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { statusClasses } from "../components/variables/variables";
import axios from "axios";
import _ from "lodash"

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "new":
      return [...payload];
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  const [effect, setEffect] = useState(true);

  useLayoutEffect(() => {
    console.log("effect get Context");
    setLoading(false);
    axios
      .get("https://office.thitoholdings.co.bw/web_api/tasks/getContext")
      .then((res) => {
        const events = JSON.parse(res.data[0].context);
        dispatchCalEvent({
          type: "new",
          payload: _.uniqBy(events ,task => task.id ) ,
        });
        localStorage.setItem("savedEvents", _.uniqBy(events ,task => task.id ));
      })
      .then(() => setLoading(true))
      .catch(console.log);
  }, []);

  const filteredEvents = useMemo(() => {
    return savedEvents.filter(
      (evt) =>
        labels
          .filter((lbl) => lbl.checked)
          .map((lbl) => lbl.label)
          .includes(evt.label) &&
        status
          .filter((stat) => stat.checked)
          .map((stat) => stat.status)
          .includes(evt.status)
    );
  }, [savedEvents, labels, status]);

  useEffect(() => {
    console.log("local storage");
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  useEffect(() => {
    setStatus((prevStatus) => {
      return [...new Set(savedEvents.map((evt) => evt.status))].map(
        (status) => {
          const currentStatus = prevStatus.find(
            (stat) => stat.status === status
          );
          return {
            status,
            checked: currentStatus ? currentStatus.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }
  function updateStatusLabel(statuss) {
    setStatus(
      status.map((stat) => (stat.status === statuss.status ? statuss : stat))
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        status,
        setStatus,
        updateLabel,
        updateStatusLabel,
        filteredEvents,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
