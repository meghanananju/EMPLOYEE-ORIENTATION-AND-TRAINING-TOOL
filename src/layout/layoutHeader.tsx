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
import { Link } from 'react-router-dom';
import Logo from '../Images/ALTEN logo Black.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Define routes using an array of objects
const navItems: { label: string; path: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-10 transition-all duration-300  shadow-lg ${isScrolled ? "bg-white shadow-lg" : "rose-600"}`}>
      <div className="mx-auto flex h-14 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block" href="/">
          <span className="sr-only">Home</span>
          <img src={Logo} alt="Logo" className="h-12" />
        </a>

        <div className="flex flex-1 items-center md:justify-between justify-end">
          {/* Desktop Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link className="transition text-dark hover:text-opacity-75 font-serif" to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Login Button - Desktop */}
          <Link to="/profile" title="User Profile" className="hidden md:block bg-blue-600 text-white px-3 py-1.5 rounded-xl hover:bg-blue-700 font-serif">
         <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </Link>

          {/* Mobile Navigation Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block rounded bg-gray-100 p-2.5 text-gray-600 hover:text-gray-700 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pl-4 pr-4 p-2 ml-16 z-50">
          <nav aria-label="Mobile" className="px-6 py-4">
            <ol className="flex flex-col gap-2 text-black text-md text-s">
              {navItems.map((item) => (
                <React.Fragment key={item.path}>
                  <li>
                    <Link className="transition hover:text-opacity-75 font-serif" to={item.path}>{item.label}</Link>
                  </li>
                  <hr className="opacity-15" />
                </React.Fragment>
              ))}
              <li>
                <Link to="/profile" className="block bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 font-serif">
                 <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> User Profile
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
