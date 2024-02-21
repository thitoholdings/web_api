import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import getCompanyTitle, {
  getCompanyTitleAB,
  getStatusColor,
  getStatusTitle,
} from "./utils/getCompanyTitle";
import getNext12Months from "./utils/getNext12Months";
import axios from "axios";
import { getStoredAuthToken } from "./utils/authToken";
import { backgroundColor } from "tailwindcss/defaultTheme";

const labelsClasses = ["red", "indigo", "gray", "green", "blue", "purple"];
const statusClasses = ["gray", "red", "yellow", "green"];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  const data = JSON.parse(getStoredAuthToken());

  const context = useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [done, setDone] = useState(selectedEvent ? selectedEvent.done : false);
  const [assignee, setAssignee] = useState(
    selectedEvent ? selectedEvent.assignee : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
  const [selectedStatus, setSelectedStatus] = useState("open");
  const [detailsChanged, setDetailsChanged] = useState(false);

  async function markAsDone() {
    const calendarEvent = {
      done: true,
      status: selectedStatus,
      assignee,
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      console.log("push");
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
    const updateDB = await axios.post(
      "http://sycamon.thitoholdings.co.bw:3003/web_api/tasks/addContext",
      {
        context: JSON.stringify(context.savedEvents),
      }
    );
  }

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      done: true,
      status: selectedStatus,
      assignee,
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      console.log("first if ");
      if (detailsChanged) {
        const task = context.savedEvents.find(
          (tsk) => tsk.id == calendarEvent.id
        );

        //console.log(task);
        //console.log("second if " + task.title);

        context.savedEvents.forEach((eve) => {
          if (eve.title == task.title && eve.day >= task.day) {
            dispatchCalEvent({
              type: "update",
              payload: { ...eve, assignee, title, description },
            });
          }
        });

        const savedEv = context.savedEvents.map((eve) => {
          if (eve.title == task.title && eve.day >= task.day) {
            return { ...eve, assignee, title, description };
          }
        });

        const update = await axios.post(
          "http://sycamon.thitoholdings.co.bw:3003/web_api/tasks/addContext",
          {
            context: JSON.stringify(savedEv),
          }
        );
        setShowEventModal(false);
        setDetailsChanged(false);
      } else {
        console.log("Update 2 " + calendarEvent.status);
        const savedEv = context.savedEvents.map((eve) => {
          if (eve.id == calendarEvent.id) {
            console.log({ ...eve, status: calendarEvent.status });
            return { ...eve, status: calendarEvent.status };
          }
          return eve;
        });

        const update = await axios.post(
          "http://sycamon.thitoholdings.co.bw:3003/web_api/tasks/addContext",
          {
            context: JSON.stringify(savedEv),
          }
        );
        dispatchCalEvent({ type: "update", payload: calendarEvent });
        setShowEventModal(false);
        return;
      }
    } else {
      // Create new events logic
      const next12Months = getNext12Months(daySelected.valueOf()).map(
        (date) => ({
          ...calendarEvent,
          day: date,
          id: Date.now(), // Generate a unique ID for each new event
        })
      );

      next12Months.forEach((calEvent) => {
        dispatchCalEvent({
          type: "push",
          payload: calEvent,
        });
      });

      const updatedEvents = [...context.savedEvents, ...next12Months];

      // Update the context with the updated events data
      const updateDB = await axios.post(
        "http://sycamon.thitoholdings.co.bw:3003/web_api/tasks/addContext",
        {
          context: JSON.stringify(updatedEvents),
        }
      );
    }

    setShowEventModal(false);
  }

  /*async function deleteEvent() {
    dispatchCalEvent({
      type: "delete",
      payload: selectedEvent,
    });
    setShowEventModal(false);

    const updateDB = await axios.post(
      "http://localhost:3001/web_api/tasks/addContext",
      {
        context: JSON.stringify(context.savedEvents),
      }
    );
  }*/

  async function deleteEvent() {
    if (selectedEvent) {
      // Filter out the selected event from the context's savedEvents
      const updatedEvents = context.savedEvents.filter(
        (event) => event.id !== selectedEvent.id
      );

      // Dispatch the updated events to reflect the deletion
      dispatchCalEvent({ type: "delete", payload: selectedEvent });

      setShowEventModal(false);

      // Update the context with the updated events data
      const updateDB = await axios.post(
        "http://sycamon.thitoholdings.co.bw:3003/web_api/tasks/addContext",
        {
          context: JSON.stringify(updatedEvents),
        }
      );
    }
  }

  return (
    <>
      {data.system_role == "supervisor" && (
        <div className="h-screen w-full fixed left-0 top-12 flex justify-center items-center">
          <form className="bg-white rounded-lg shadow-2xl w-1/4">
            <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
              <span className="material-icons-outlined text-gray-400">
                drag_handle
              </span>
              <div>
                {selectedEvent && (
                  <span
                    onClick={() => deleteEvent()}
                    className="material-icons-outlined text-gray-400 cursor-pointer"
                  >
                    delete
                  </span>
                )}
                <button onClick={() => setShowEventModal(false)}>
                  <span className="material-icons-outlined text-gray-400">
                    close
                  </span>
                </button>
              </div>
            </header>
            <div className="p-3">
              <div className="grid grid-cols-1/5 items-end gap-y-7">
                <div></div>
                <input
                  type="text"
                  name="title"
                  placeholder="Add title"
                  value={title}
                  required
                  className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setDetailsChanged(true);
                  }}
                />
                <span className="material-icons-outlined text-gray-400">
                  schedule
                </span>
                <p>{daySelected.format("dddd, MMMM DD")}</p>

                <span className="material-icons-outlined text-gray-400">
                  segment
                </span>
                <input
                  type="text"
                  name="description"
                  placeholder="Add a description"
                  value={description}
                  required
                  className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setDetailsChanged(true);
                  }}
                />

                <span className="material-icons-outlined text-gray-400">
                  segment
                </span>
                <input
                  type="text"
                  name="assignee"
                  placeholder="Assignee"
                  value={assignee}
                  required
                  className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => {
                    setAssignee(e.target.value);
                    setDetailsChanged(true);
                  }}
                />

                <span className="material-icons-outlined text-gray-400">
                  bookmark_border
                </span>
                <div className="flex gap-x-2">
                  {labelsClasses.map((lblClass, i) => (
                    <div key={i}>
                      <small
                        style={{
                          fontSize: 5,
                          textAlign: "center",
                          marginLeft: 5,
                        }}
                      >
                        {getCompanyTitle(lblClass)}
                      </small>
                      <span
                        key={i}
                        style={{
                          borderColor: "#000",
                          borderWidth: lblClass == selectedLabel ? 3 : 0,
                          backgroundColor: "#e1a28e",
                        }}
                        onClick={() => setSelectedLabel(lblClass)}
                        className={`bg-${lblClass}-500 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer`}
                      >
                        {selectedLabel === lblClass && (
                          <span className="material-icons-outlined text-white text-sm">
                            check
                          </span>
                        )}
                        <small className="text-white">
                          {getCompanyTitleAB(lblClass)}
                        </small>
                      </span>
                    </div>
                  ))}
                </div>
                <span className="material-icons-outlined text-gray-400">
                  bookmark_border
                </span>
                <div className="flex gap-x-2">
                  {statusClasses.map((lblClass, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor:
                          lblClass == "yellow" ? "orange" : lblClass,
                        borderColor: "#000",
                        borderWidth:
                          getStatusTitle(lblClass) == selectedStatus ? 3 : 0,
                      }}
                      onClick={() =>
                        setSelectedStatus(getStatusTitle(lblClass))
                      }
                      className={`bg-${lblClass}-500 w-14 h-12 rounded-md flex items-center justify-center cursor-pointer`}
                    >
                      {selectedLabel === getStatusColor(lblClass) && (
                        <span className="material-icons-outlined text-white text-sm">
                          check
                        </span>
                      )}
                      <small className="text-white">
                        {getStatusTitle(lblClass)}
                      </small>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between border-t p-3 mt-5">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600  px-6 py-2 rounded text-black"
                style={{
                  backgroundColor: "#4CAF50",
                }}
                onClick={() => markAsDone()}
              >
                Done
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-black"
                style={{
                  backgroundColor: "#2196F3",
                }}
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
