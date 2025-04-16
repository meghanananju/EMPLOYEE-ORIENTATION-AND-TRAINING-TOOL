 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : LayoutHeader.tsx
*
* Description      : LayoutHeader
*
* Author(s)        : Chetan Biradar
*
* Version History:
* <Version Number>                 <Author>                <date>        <defect Number>      <Modification
*                                                                                           made and the
*                                                                                           reason for
*                                                                                           modification >
*  1.0                            Chetan Biradar          14-04-2025         --              initial version
*
* References        :
*                     
* Assumption(s)     : None.
*                     
* Constraint(s)     : None.
*                     
 ****************************************************************************
*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/ALTEN logo Black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 shadow-lg ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="block">
          <span className="sr-only">Home</span>
          <img src={Logo} alt="Logo" className="h-12" />
        </a>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/notifications"
              title="Notifications"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition"
            >
              <FontAwesomeIcon icon={faBell} className="text-lg" />
            </Link>

            <Link
              to="/profile"
              title="User Profile"
              className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
            >
              <FontAwesomeIcon icon={faUser} className="text-sm" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded bg-gray-100 p-2.5 text-gray-600 hover:text-gray-700"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (icons only) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-2">
          <nav className="flex flex-col gap-3">
            <Link
              to="/notifications"
              // className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
             className="flex items-center gap-2    px-3 py-2 rounded-lg hover:text-blue-500 font-serif"

            >
              <FontAwesomeIcon icon={faBell} />
              <span className="font-serif">Notifications</span>
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-700 font-serif"
            >
              <FontAwesomeIcon icon={faUser} />
              <span>User Profile</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

