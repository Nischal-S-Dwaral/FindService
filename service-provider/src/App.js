import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import Service from "./pages/Service";
import Services from "./pages/Services";
import ViewServiceRequests from "./pages/ViewServiceRequests";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CustomerRequest from "./pages/CustomerRequest";
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
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/addService" element={<AddService/>} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/editService/:id" element={<EditService/>} />
        <Route path="/view/serviceRequests" element={<ViewServiceRequests/>} />
        <Route path="/customerRequest/:id" element={<CustomerRequest />} />
              </>
          )}
              
        </Routes>
      </Router>
  );
}

export default App;
