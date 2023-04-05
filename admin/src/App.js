import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceProviderApproval from "./pages/ServiceProviderApproval";
import VerifiedSP from "./pages/VerifiedSP";
import ServiceProvider from "./pages/ServiceProvider";
import ServicePage from "./pages/ServicePage";

function App() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/serviceproviderapproval/:id" element={<ServiceProviderApproval />} />
              <Route path="/verifiedSP" element={<VerifiedSP />} />
              <Route path="/serviceprovider/:id" element={<ServiceProvider />} />
              <Route path="/service/:id" element={<ServicePage />} />

          </Routes>
      </Router>
    );
}

export default App;
