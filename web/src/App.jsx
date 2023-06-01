import React, { useState, useContext, useEffect, useRef } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Loader from "./components/utils/Loader";
import Login from "./components/Login";
import {
  getStoredUserInfo,
  getStoredAuthToken,
} from "./components/utils/authToken";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PrivateRoute, { LoginRoute } from "./components/PrivateRoute";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, filteredEvents, loading, token, user } =
    useContext(GlobalContext);
  const [sidebar, setSidebar] = useState(true);
  const [page, setPage] = useState("login");

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  function Matrix() {
    return (
      <div>
        {loading ? (
          <div className="h-screen flex flex-col">
            <div style={{ zIndex: 1, backgroundColor: "#fff" }}>
              <CalendarHeader sidebar={sidebar} setSidebar={setSidebar} />
            </div>

            <div className="flex flex-1">
              {sidebar && <Sidebar />}
              <Month month={currenMonth} />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }

  function ShowHideModal() {
    return showEventModal && <EventModal />;
  }

  return (
    <React.Fragment>
      <ShowHideModal />
      <Routes>
        <Route
          index
          path="/login"
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
        <Route
          path="/matrix"
          element={
            <PrivateRoute>
              <Matrix />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Matrix />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </React.Fragment>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
