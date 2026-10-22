import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Menu,
    X,
    Sun,
    Moon,
    Plane,
} from "lucide-react";

import "../styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <div className="logo-icon">
                        <Plane size={20} />
                    </div>

                    <div className="logo-text">
                        <span className="logo-main">AeroVision</span>
                        <span className="logo-ai">AI</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        onClick={closeMenu}
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/analyze"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        onClick={closeMenu}
                    >
                        Analyze
                    </NavLink>

                    <NavLink
                        to="/performance"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        onClick={closeMenu}
                    >
                        Performance
                    </NavLink>

                    {/* Mobile Theme Toggle */}
                    <button
                        className="theme-toggle mobile-theme"
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        <span>
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </span>
                    </button>
                </div>

                {/* Desktop Theme Toggle */}
                <button
                    className="theme-toggle desktop-theme"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle theme"
                >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>
        </nav>
    );
}

export default Navbar;