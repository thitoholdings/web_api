import React, { useState } from "react";
import Day from "./Day";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";

export default function Month({ month }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const containerVariants = {
    initial: { y: 0 },
    scroll: {
      y: -1000, // Adjust this value based on the height of your content
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 10, // Adjust this value to control the speed
        ease: "linear",
      },
    },
  };

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
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
              height: "100vh",
              overflow: "hidden",
              position: "relative",
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
