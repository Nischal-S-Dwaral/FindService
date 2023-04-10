import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Services from "./pages/Services";
import ViewServiceRequests from "./pages/ViewServiceRequests";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import ServiceRequest from "./pages/ServiceRequest";
import Notifications from "./pages/Notifications";
import {useSelector} from "react-redux";

function App() {
    const user = useSelector((state) => state.user.currentUser);
    return (
      <Router>
          <Routes>
              <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />} />
              <Route path="/register" element={user ? <Navigate to="/" replace /> :  <Register />} />
              {
                  user && (
                      <>
                          <Route path="/" element={<Home/>} />
                          <Route path="/services" element={<Services/>} />
                          <Route path="/view/serviceRequests" element={<ViewServiceRequests/>} />
                          <Route path="/service/:id" element={<Service />} />
                          <Route path="/request/:id" element={<ServiceRequest />} />
                          <Route path="/notifications" element={<Notifications/>} />
                      </>
                  )
              }
          </Routes>
      </Router>
    );
}

export default App;
