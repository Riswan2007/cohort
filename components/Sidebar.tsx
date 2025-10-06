
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { NAV_LINKS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { user } = useAuth();
  const navLinks = user ? NAV_LINKS[user.role] : [];

  return (
    <div className={`relative bg-card border-r border-border transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-border">
        <h1 className={`text-2xl font-bold text-primary-500 whitespace-nowrap overflow-hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          Cohert
        </h1>
        <div className={`text-2xl font-bold text-primary-500 transition-opacity absolute left-1/2 -translate-x-1/2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          C
        </div>
      </div>
      <nav className="mt-6">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} className="px-4 py-1">
              <NavLink
                to={link.href}
                end
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary-500 text-white'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  } ${!isOpen ? 'justify-center' : ''}`
                }
                title={isOpen ? '' : link.name}
              >
                <span className="shrink-0 w-6 h-6">{link.icon}</span>
                <span className={`ml-4 whitespace-nowrap transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
