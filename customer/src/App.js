import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import ViewServiceRequests from "./pages/ViewServiceRequests";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";

function App() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/view/serviceRequests" element={<ViewServiceRequests/>} />
              <Route path="/service/:id" element={<Service />} />
          </Routes>
      </Router>
    );
}

export default App;
