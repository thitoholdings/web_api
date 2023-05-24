import React, { useState } from "react";
import Day from "./Day";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import { TextareaAutosize } from "@mui/material";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Month({ month }) {
  const { setScrolling, isScrolling, duration, setDuration } =
    useContext(GlobalContext);

  const containerVariants = {
    initial: { y: 0 },
    scroll: {
      y: -5000, // Adjust this value based on the height of your content
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration, // Adjust this value to control the speed
        ease: "linear",
      },
    },
  };

  function filterWeekdays(datesArray) {
    return datesArray.map((week) =>
      week.filter((date) => {
        const dayOfWeek = new Date(date).getDay();
        return dayOfWeek !== 0 && dayOfWeek !== 6; // Filter out Saturday (0) and Sunday (6)
      })
    );
  }

  function filterWeekdays(datesArray) {
    return datesArray.map((week) =>
      week.filter((date) => {
        const dayOfWeek = dayjs(date).day();
        return dayOfWeek !== 0 && dayOfWeek !== 6; // Filter out Saturday (0) and Sunday (6)
      })
    );
  }

  function MonthCalendar() {
    return (
      <div className="flex-1 grid grid-cols-5 grid-rows-5">
        {filterWeekdays(month).map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => {
              return <Day day={day} key={idx} rowIdx={i} />;
            })}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div>
      <AnimatePresence>
        {isScrolling ? (
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="scroll"
            exit="initial"
            style={{
              height: "5000px",
              overflow: "visible",
              position: "relative",
              zIndex: 0,
            }}
          >
            <div style={{ borderWidth: 5, borderColor: "black" }}>
              <MonthCalendar />
            </div>
          </motion.div>
        ) : (
          <div style={{ padding: 5 }}>
            <MonthCalendar />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
