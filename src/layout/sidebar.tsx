 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : Sidebar.tsx
*
* Description      : Sidebar
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
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { config, colorScheme, NavItem } from './nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightToBracket,
  faThumbtack,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

type SidebarProps = {
  onSidebarStateChange?: (isOpen: boolean) => void;
};


const Sidebar: React.FC<SidebarProps> = ({ onSidebarStateChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPinned, setIsPinned] = useState(() =>
    JSON.parse(localStorage.getItem('sidebarPinned') || 'false')
  );
  const [isHovered, setIsHovered] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const isOpen = isPinned || isHovered;
  useEffect(() => {
    onSidebarStateChange?.(isOpen);
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('sidebarPinned', JSON.stringify(isPinned));
  }, [isPinned]);

  useEffect(() => {
    if (!isOpen) {
      setOpenMenus([]); // Collapse all menus when sidebar is closed
    }
  }, [isOpen]);

  const logoutItem = config.find((item) => item.path === '/logout');
  const navItems = config.filter((item) => item.path !== '/logout'); 

  const toggleMenu = (path: string) => {
  setOpenMenus((prev) => {
    const isAlreadyOpen = prev.includes(path);

    if (isAlreadyOpen) {
      // If the menu is already open, close it and all its submenus
      return prev.filter(p => !p.startsWith(path));
    }

    // Open only this path and its parent hierarchy
    const pathParts = path.split('/');
    const newMenus: string[] = [];

    for (let i = 1; i < pathParts.length; i++) {
      newMenus.push(pathParts.slice(0, i + 1).join('/'));
    }

    return newMenus;
  });
};

  const buildFullPath = (parentPath: string, currentPath: string) => {
    if (currentPath.startsWith('/')) return currentPath;
    return `${parentPath}/${currentPath}`.replace(/\/+/g, '/');
  };

  const isActivePath = (itemPath: string) => {
    return location.pathname === itemPath || location.pathname.startsWith(`${itemPath}/`);
  };

  const isAnyChildActive = (item: NavItem, parentPath = ''): boolean => {
    const fullPath = buildFullPath(parentPath, item.path);
    if (isActivePath(fullPath)) return true;
    if (item.children) {
      return item.children.some((child) => isAnyChildActive(child, fullPath));
    }
    return false;
  };

  const getFontStyles = (level: number) => {
    if (level === 0) return 'text-sm text-gray-700';
    if (level === 1) return 'text-sm font-medium';
    return 'text-sm font-normal';
  };

  const renderNavItems = (items: NavItem[], level = 0, parentPath = '') => {
    return items.map((item) => {
      const fullPath = buildFullPath(parentPath, item.path);
      const hasChildren = item.children && item.children.length > 0;
      const isActive = isActivePath(fullPath);
      const isChildActive = isAnyChildActive(item, parentPath);
      const isSubMenuOpen = openMenus.includes(fullPath);
      const isMain = level === 0;

      const baseStyles = `
        flex items-center justify-between px-3 py-2.5 rounded-md cursor-pointer transition-all duration-200
        ${getFontStyles(level)}
      `;

      const activeStyles = isMain
        ? 'bg-blue-500 text-white'
        : 'border-l-2 border-blue-600 text-blue-700';

      const hoverStyles = isMain
        ? 'hover:bg-gray-200 hover:text-blue-700'
        : 'hover:bg-gray-200 hover:border-blue-400 hover:text-blue-700';

      return (
        <div key={fullPath} className={`ml-${Math.min(level + 1, 3)}`}>
          <div
            title={!isOpen ? item.label : ''}
            className={`${baseStyles} ${isActive || isChildActive ? activeStyles : 'text-gray-600'} ${hoverStyles}`}
            onClick={() => {
              if (hasChildren && isOpen) toggleMenu(fullPath);
              if (!hasChildren && location.pathname !== fullPath) {
                navigate(fullPath);
              }
            }}
          >
            <div className="flex items-center gap-x-2 w-full">
              <div className="min-w-[1.40rem] h-5 flex items-center justify-center text-[16px] shrink-0">
                {item.icon}
              </div>
              {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
            </div>

            {hasChildren && isOpen && (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-[10px] transition-transform duration-300 ${
                  isSubMenuOpen ? 'rotate-180' : ''
                }`}
              />
            )}
          </div>

          {hasChildren && isOpen && (
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isSubMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {renderNavItems(item.children!, level + 1, fullPath)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className={`fixed top-[56px] left-0 z-20 transition-all duration-300 border-r shadow-md
        ${colorScheme.bg} ${colorScheme.border} ${isOpen ? 'w-54' : 'w-16'}`}
      style={{
        height: 'calc(100vh - 53px - 40px)',
        overflowY: isOpen ? 'auto' : 'hidden',
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {!isOpen && (
            <button
              className="w-full flex items-center justify-center py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
              onClick={() => setIsHovered(true)}
              title="Open Sidebar"
            >
              <FontAwesomeIcon icon={faArrowRightToBracket} className=" text-lg" />
            </button>
          )}

          {isOpen && (
            <div className="flex justify-end pr-2 mb-2">
              <button
                className="text-gray-500 hover:text-blue-600 transition cursor-pointer"
                onClick={() => setIsPinned(!isPinned)}
                title={isPinned ? 'Unpin Sidebar' : 'Pin Sidebar'}
              >
                <FontAwesomeIcon
                  icon={faThumbtack}
                  className={`transition-transform duration-300 ${isPinned ? 'rotate-45' : ''}`}
                />
              </button>
            </div>
          )}

          {renderNavItems(navItems)}
        </div>

        {logoutItem && (
          <div className="px-2 py-3 border-t border-gray-100">
            <div
              title={!isOpen ? logoutItem.label : ''}
              className="flex items-center gap-x-3 px-3.25 py-2 text-md rounded-md font-bold text-blue-600
                hover:bg-blue-400 hover:text-white transition-colors cursor-pointer"
              onClick={() => alert('Logout clicked')}
            >
              <div className="w-5 h-5 flex items-center justify-center text-md">
                {logoutItem.icon}
              </div>
              {isOpen && <span>{logoutItem.label}</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;



 
 