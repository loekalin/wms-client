import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/Pages/Login/Login";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import Navbar from "@/Components/Navbar";
import Receive from "@/Pages/Receive/Receive";
import ReceiveEdit from "@/Pages/Receive/Edit/ReceiveEdit";
// import AuthMiddleware from "@/Components/AuthMiddleware";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            // <AuthMiddleware>
            <Navbar>
              <Dashboard />
            </Navbar>
            // </AuthMiddleware>
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
      <Route
      path="/receive/edit"
      element={
        <Navbar>
          <ReceiveEdit />
        </Navbar>
      }
      />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
