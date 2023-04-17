import React, { useState } from "react";
import { useStore } from "@/Lib/store";
import { AiOutlineMenu, AiFillFolderOpen } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GiHouse, GiHandTruck } from "react-icons/gi";
import { BiImport, BiExport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { RiArrowDropDownLine, RiFolderSharedLine, RiFolderReceivedLine } from "react-icons/ri";
import { BsBoxFill, BsFillGearFill } from "react-icons/bs";
import { VscSymbolVariable } from "react-icons/vsc";
import { TbLockAccess } from "react-icons/tb";
import { authStore } from "@/Lib/authStore";
import { Menu, Transition } from "@headlessui/react";

const Navbar = ({ children }) => {
  const sidebarSecondChildClicked = useStore((state) => state.sidebarSecondChildClicked);
  const sidebarChildClicked = useStore((state) => state.sidebarChildClicked);
  const sidebarClicked = useStore((state) => state.sidebarClicked);
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const toggleSidebarChild = useStore((state) => state.toggleSidebarChild);
  const toggleSidebarSecondChild = useStore((state) => state.toggleSidebarSecondChild);

  console.log(sidebarChildClicked);
  return (
    <>
      <aside className="w-full fixed h-0 flex top-0 ">
        <aside className={`border-r p-2 h-screen transition-all duration-300 ${sidebarClicked ? "w-14" : "w-80"}`}>
          <span className="flex-row flex items-center space-x-4 justify-center">
            <GiHouse size={28} />
            {!sidebarClicked && <p className="text-2xl font-semibold">Small WMS</p>}
          </span>
          <SidebarContent
            sidebarClicked={sidebarClicked}
            sidebarChildClicked={sidebarChildClicked}
            toggleSidebarChild={toggleSidebarChild}
            sidebarSecondChildClicked={sidebarSecondChildClicked}
            toggleSidebarSecondChild={toggleSidebarSecondChild}
          />
        </aside>
        {/*  navbar */}
        <TopBar toggleSidebar={toggleSidebar} />
      </aside>
      {/* <main className={`${!sidebarClicked ? "translate-x-72 translate-y-80" : ""} transition-all duration-300`}>{children}</main> */}
      <main className={`${!sidebarClicked ? "ml-[19rem] " : "ml-[5.5rem]"} mr-6 mt-16  transition-all duration-300`}>{children}</main>
    </>
  );
};

export default Navbar;

const TopBar = ({ toggleSidebar }) => {
  const logoutHandler = () => {
    document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    authStore.setState({ isLoggedIn: false });
  };
  const username = authStore((state) => state.users);
  console.log(username);
  return (
    <section className="border-b h-12 w-full flex bg-white flex-row justify-between items-center px-8">
      <AiOutlineMenu size={25} className="cursor-pointer" onClick={toggleSidebar} />

      <div className="flex ">
        <Menu as={"div"}>
          <Menu.Button className="flex flex-row space-x-4">
            <p>{username && username[0].data.username}</p>
            <FaUserCircle size={25} />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="fixed bg-blue-100 rounded-box shadow-2xl p-2 -mx-4 my-5 cursor-pointer">
              {({ active }) => (
                <li onClick={logoutHandler} className="flex flex-row items-center space-x-2">
                  <HiLogout color="black" size={25} />
                  <p>Logout</p>
                </li>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </section>
  );
};

const SidebarContent = ({
  sidebarClicked,
  toggleSidebarChild,
  sidebarChildClicked,
  toggleSidebarSecondChild,
  sidebarSecondChildClicked,
}) => {
  return (
    <ul className="space-y-2">
      {/* this is where u set the sidebar items */}
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800  mt-4 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  mt-4 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
        }
      >
        <MdDashboard size={28} />
        {!sidebarClicked && <p className="font-lg font-semibold">Dashboard</p>}
      </NavLink>
      {/* Receive */}
      <NavLink
        to={"/receive"}
        className={({ isActive }) =>
          isActive
            ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
        }
      >
        <BiImport size={28} />
        {!sidebarClicked && <p className="font-lg font-semibold">Receive</p>}
      </NavLink>
      {/* Issuing */}
      <NavLink
        to={"/issuing"}
        className={({ isActive }) =>
          isActive
            ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
        }
      >
        <BiExport size={28} />
        {!sidebarClicked && <p className="font-lg font-semibold">Issuing</p>}
      </NavLink>

      {/* Report */}
      <section
        onClick={toggleSidebarChild}
        className="active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row space-x-3 cursor-pointer"
      >
        <AiFillFolderOpen size={28} />
        {!sidebarClicked && <p className="font-lg font-semibold">Report</p>}
        {!sidebarClicked && <RiArrowDropDownLine size={28} />}
      </section>

      {/* Report Child */}
      <Transition
        show={sidebarChildClicked}
        enter="transition duration-200 ease-in"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <section className="space-y-2">
          {/* child 1  */}
          <NavLink
            to={"/receive-report"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <RiFolderReceivedLine size={28} />
            {!sidebarClicked && <p className="font-lg font-semibold">Receive Report</p>}
          </NavLink>
          {/* child 2 */}
          <NavLink
            to={"/issuing-report"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <RiFolderSharedLine size={28} />
            {!sidebarClicked && <p className="font-lg font-semibold">Issuing Report</p>}
          </NavLink>
        </section>
      </Transition>

      {/* master */}
      <section
        onClick={toggleSidebarSecondChild}
        className="active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row space-x-3 cursor-pointer"
      >
        <BsFillGearFill size={28} />
        {!sidebarClicked && <p className="font-lg font-semibold">Master</p>}
        {!sidebarClicked && <RiArrowDropDownLine size={28} />}
      </section>

      {/* master child */}
      <Transition
        show={sidebarSecondChildClicked}
        enter="transition duration-200 ease-in"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <section className="space-y-2">
          {/* child 1  */}
          <NavLink
            to={"/product"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <BsBoxFill size={28} />
            {!sidebarClicked && <p className="font-lg font-semibold">Product</p>}
          </NavLink>
          {/* child 2 */}
          <NavLink
            to={"/unit"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <VscSymbolVariable size={28} />
            {!sidebarClicked && <p className="font-lg font-semibold">Unit</p>}
          </NavLink>

          {/* child 3 */}
          <NavLink
            to={"/access"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <TbLockAccess size={28} />
            {!sidebarClicked && <p className="font-lg font-semibold">Access</p>}
          </NavLink>

          {/* child 4 */}
          <NavLink
            to={"/Suplier"}
            className={({ isActive }) =>
              isActive
                ? "active:scale-105 items-center transition-all duration-200 p-2 bg-blue-200 text-blue-600 border-none hover:bg-blue-400 hover:text-blue-800 rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
                : "active:scale-105 items-center transition-all duration-200 p-2 bg-white border-none text-black hover:bg-blue-200 hover:text-blue-500  rounded-lg flex flex-row justify-start space-x-3 cursor-pointer"
            }
          >
            <GiHandTruck size={28} />
            {!sidebarClicked && <p className="font-lg font-semibold">Suplier</p>}
          </NavLink>
        </section>
      </Transition>

      {/* end */}
    </ul>
  );
};
