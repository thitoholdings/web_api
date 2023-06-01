import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const speed = [
  {
    value: 50,
    label: "50",
  },
  {
    value: 75,
    label: "75",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 125,
    label: "125",
  },
  {
    value: 150,
    label: "150",
  },
  {
    value: 175,
    label: "175",
  },
  {
    value: 200,
    label: "200",
  },
];

export default function CalendarHeader({ sidebar, setSidebar }) {
  const {
    monthIndex,
    setMonthIndex,
    duration,
    setDuration,
    setScrolling,
    isScrolling,
  } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        Task Matrix Calendar <small>1.0.3</small>
      </h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <label
        style={{
          display: "flex",
          alignSelf: "flex-end",
          marginLeft: 15,
        }}
      >
        <input
          type="checkbox"
          checked={sidebar}
          onChange={() => setSidebar(!sidebar)}
        />
        {sidebar ? "Hide" : "Show"} Sidebar
      </label>
      <label
        style={{
          display: "flex",
          alignSelf: "flex-end",
          marginLeft: 15,
        }}
      >
        <input
          style={{ cursor: "pointer" }}
          type="checkbox"
          checked={isScrolling}
          onChange={() => setScrolling(!isScrolling)}
        />
        {isScrolling ? "Stop" : "Start"} Animation : {duration}
      </label>
      <label
        style={{
          display: "flex",
          alignSelf: "flex-end",
          marginLeft: 15,
        }}
      >
        Speed{" "}
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Duration"
            defaultValue={50}
            getAriaValueText={setDuration}
            min={50}
            max={200}
            step={25}
            valueLabelDisplay="auto"
            marks={speed}
          />
        </Box>
      </label>
    </header>
  );
}
