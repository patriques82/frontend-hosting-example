import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FreeComponent from "./components/FreeComponent";
import Home from "./components/Home";
import DashBoard from "./components/Dashboard";
import EnvironmentContext from "./components/EnvironmentContext";

function App() {
  const API_ENDPOINT =
    process.env.REACT_APP_API_ENDPOINT ||
    "https://backend-hosting-example.onrender.com";
  return (
    <EnvironmentContext.Provider value={API_ENDPOINT}>
      <Container>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/free" element={<FreeComponent />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Container>
    </EnvironmentContext.Provider>
  );
}

export default App;
