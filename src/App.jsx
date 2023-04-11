import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/Pages/Login/Login";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import Navbar from "@/Components/Navbar";
import Receive from "@/Pages/Receive/Receive";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Navbar>
              <Dashboard />
            </Navbar>
          }
        />
        <Route
          path="/receive"
          element={
            <Navbar>
              <Receive />
            </Navbar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
