import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  // FaTruck,
  FaClipboardList,
  FaUserFriends,
  FaMapMarkedAlt,
  FaUserShield,
  FaQuestionCircle,
  FaTachometerAlt,
  FaCalendarAlt,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";
import ProFastLogo from "../ProFastLogo/ProFastLogo";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  const handleLogOut = () => {
    logOut().then(() => {
      console.log("Logged out");
    });
  };

  // Close popup if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold flex items-center gap-2 border-b-2 border-primary pb-1"
      : "flex items-center gap-2 text-gray-600 hover:text-primary transition-all duration-200";

  const navItems = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          <FaHome /> Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/sendParcel" className={navLinkClass}>
          <FaTruck /> Send A Parcel
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/allpolicies" className={navLinkClass}>
          <FaClipboardList /> All Policies
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/agents" className={navLinkClass}>
          <FaUserFriends /> Agents
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/coverage" className={navLinkClass}>
          <FaMapMarkedAlt /> Coverage
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard" className={navLinkClass}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/beARider" className={navLinkClass}>
          <FaUserFriends /> Agents
        </NavLink>
      </li>
      <li>
        <NavLink to="/faqs" className={navLinkClass}>
          <FaQuestionCircle /> FAQs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 z-50 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-60 p-2 shadow">
            {navItems}
          </ul>
        </div>
        <span className="btn btn-ghost text-xl">
          <ProFastLogo />
        </span>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navItems}</ul>
      </div>

      <div className="navbar-end relative" ref={profileRef}>
        {user ? (
          <>
            <img
              src={user.photoURL || "https://i.ibb.co/QJfQ4Zb/user.png"}
              alt="Profile"
              onClick={() => setShowProfile(!showProfile)}
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
            />

            {showProfile && (
              <div className="absolute right-0 top-14 w-80 bg-white shadow-lg border rounded-xl z-50 p-4">
                <div className="flex items-center gap-3 border-b pb-3">
                  <img src={user.photoURL || "https://i.ibb.co/QJfQ4Zb/user.png"} alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-green-800 font-bold">{user.displayName}</p>
                    <p className="text-gray-600 font-semibold">{user.email}</p>
                    <span className="text-xs text-gray-500">See all profiles</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2">
                  <li>
                    <Link className="flex items-center gap-2 text-green-700  hover:bg-gray-100 p-2 rounded">
                      <FaBoxOpen /> My Create
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-2 text-green-700 hover:bg-gray-100 p-2 rounded">
                      <FaCalendarAlt /> My Bookings
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut} className="flex items-center gap-2 text-red-600 hover:bg-red-100 p-2 rounded w-full">
                      <FaSignOutAlt /> Log out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link to="/login" className="btn btn-primary text-white">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
