import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Services from "./pages/Services";
import ViewServiceRequests from "./pages/ViewServiceRequests";

const Container = styled.div `
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
      <Router>
          <Navbar />
          <Container>
              <Sidebar />
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/services" element={<Services/>} />
                  <Route path="/view/serviceRequests" element={<ViewServiceRequests/>} />
              </Routes>
          </Container>
          <Footer />
      </Router>
  );
}

export default App;
