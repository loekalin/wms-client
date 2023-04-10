import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/Pages/Login/Login";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import Navbar from "@/Components/Navbar";
import test from "@/Pages/Test/test";
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
          path="/receivereport"
          element={
            <Navbar>
              <test />
            </Navbar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
