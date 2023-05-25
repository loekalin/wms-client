import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/Pages/Login/Login";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import Navbar from "@/Components/Navbar";
import Receive from "@/Pages/Receive/Receive";
import ReceiveEdit from "@/Pages/Receive/Edit/ReceiveEdit";
import ReceiveAdd from "@/Pages/Receive/Add/ReceiveAdd";
import Issuing from "@/Pages/Issuing/Issuing";
import IssuingAdd from "@/Pages/Issuing/Add/IssuingAdd";
import MasterProduct from "@/Pages/Master/Product/MasterProduct";
import MasterAccess from "@/Pages/Master/Access/MasterAccess";
import AddUser from "@/Pages/Master/Access/Add/AddUser";
import AuthMiddleware from "@/Components/AuthMiddleware";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <AuthMiddleware>
              <Navbar>
                <Dashboard />
              </Navbar>
            </AuthMiddleware>         
          }
        />
        <Route
          path="/receive"
          element={
            <AuthMiddleware>
              <Navbar>
                <Receive />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/receive/edit/:id"
          element={
            <AuthMiddleware>
              <Navbar>
                <ReceiveEdit />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/receive/add"
          element={
            <AuthMiddleware>
              <Navbar>
                <ReceiveAdd />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/issuing"
          element={
            <AuthMiddleware>
              <Navbar>
                <Issuing />
              </Navbar>
            </AuthMiddleware>
          }
        />
        {/* <Route
          path="/issuing/edit/:id"
          element={
            <AuthMiddleware>
              <Navbar>
                <IssuingAdd />
              </Navbar>
            </AuthMiddleware>
          }
        /> */}
        <Route
          path="/issuing/add/"
          element={
            <AuthMiddleware>
              <Navbar>
                <IssuingAdd />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/master/product"
          element={
            <AuthMiddleware>
              <Navbar>
                <MasterProduct />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/master/access"
          element={
            <AuthMiddleware>
              <Navbar>
                <MasterAccess />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/master/access/add"
          element={
            <AuthMiddleware>
              <Navbar>
                <AddUser />
              </Navbar>
            </AuthMiddleware>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
