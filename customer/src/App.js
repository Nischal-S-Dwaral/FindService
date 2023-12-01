import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Services from "./pages/Services";
import ViewServiceRequests from "./pages/ViewServiceRequests";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import ServiceRequest from "./pages/ServiceRequest";
import Notifications from "./pages/Notifications";
import Review from "./pages/Review";

function App() {
    return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/services/:category" element={<Services/>} />
              <Route path="/requests" element={<ViewServiceRequests/>} />
              <Route path="/service/:id" element={<Service />} />
              <Route path="/request/:id" element={<ServiceRequest />} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/review/:id" element={<Review />} />
          </Routes>
      </Router>
    );
}

export default App;
