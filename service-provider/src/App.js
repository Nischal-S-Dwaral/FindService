import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import Service from "./pages/Service";
import Services from "./pages/Services";
import ViewServiceRequests from "./pages/ViewServiceRequests";
import ServiceProviderApproval from "./pages/ServiceProviderApproval";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerRequest from "./pages/CustomerRequest";

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/addService" element={<AddService/>} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/editService/:id" element={<EditService/>} />
        <Route path="/view/serviceRequests" element={<ViewServiceRequests/>} />
        <Route path="/serviceproviderapproval/:id" element={<ServiceProviderApproval />} />
        <Route path="/customerRequest/:id" element={<CustomerRequest />} />
              
              
        </Routes>
      </Router>
  );
}

export default App;
