
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';
import { notifications } from '../data/notifications';

interface NavbarProps {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const [profileOpen, setProfileOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);

    const unreadCount = notifications.filter(n => !n.read).length;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setProfileOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
                setNotificationsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="flex items-center justify-between h-16 px-6 bg-card border-b border-border shrink-0">
            <button onClick={toggleSidebar} className="text-muted-foreground hover:text-foreground">
                <MenuIcon />
            </button>
            <div className="flex items-center gap-4">
                <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
                    {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                </button>
                <div ref={notificationsRef} className="relative">
                    <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="relative text-muted-foreground hover:text-foreground">
                        <BellIcon />
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">{unreadCount}</span>
                        )}
                    </button>
                    {notificationsOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-10">
                            <div className="p-4 font-semibold border-b border-border">Notifications</div>
                            <ul>
                                {notifications.slice(0, 4).map(n => (
                                    <li key={n.id} className={`p-3 border-b border-border text-sm ${!n.read ? 'bg-primary-500/10' : ''}`}>
                                        <p>{n.message}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{n.date}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-2 text-center">
                                <Link to="/notifications" onClick={() => setNotificationsOpen(false)} className="text-sm text-primary-500 hover:underline">View All</Link>
                            </div>
                        </div>
                    )}
                </div>
                <div ref={profileRef} className="relative">
                    <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2">
                        <img src={user?.avatar} alt={user?.name} className="w-8 h-8 rounded-full" />
                    </button>
                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-10">
                            <div className="p-4 border-b border-border">
                                <p className="font-semibold">{user?.name}</p>
                                <p className="text-sm text-muted-foreground">{user?.email}</p>
                            </div>
                            <Link to="/profile" onClick={() => setProfileOpen(false)} className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent">Profile</Link>
                            <button onClick={() => { logout(); setProfileOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-accent">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
