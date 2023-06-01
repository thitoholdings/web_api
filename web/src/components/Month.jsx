import React, { useEffect, useState } from "react";
import Day from "./Day";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { getStoredAuthToken } from "./utils/authToken";

export default function Month({ month }) {
  const { isScrolling, duration, setScrolling } = useContext(GlobalContext);
  const data = JSON.parse(getStoredAuthToken());

  useEffect(() => {
    setScrolling(!!isScrolling);
  }, [duration]);

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

  function filterSupervisor(month) {
    if (data) {
      if (data.system_role == "supervisor") {
        return filterWeekdays(month);
      } else {
        console.log(
          month.filter((m) => {
            console.log(m);
            return m.userId == 0;
          })
        );
        return filterWeekdays(month.filter((m) => m.userId == data.ID));
      }
    }
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
            variants={{
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
            }}
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
            <div>
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
