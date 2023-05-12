import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Loader from "./components/utils/Loader";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, filteredEvents, loading } =
    useContext(GlobalContext);
  const [sidebar, setSidebar] = useState(true);
  const context = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div>
        {loading ? (
          <div className="h-screen flex flex-col">
            <label
              style={{ margin: 2, display: "flex", alignSelf: "flex-end" }}
            >
              <input
                type="checkbox"
                checked={sidebar}
                onChange={() => setSidebar(!sidebar)}
              />
              Hide Sidebar
            </label>

            <CalendarHeader />
            <div className="flex flex-1">
              {sidebar && <Sidebar />}
              <Month month={currenMonth} />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
