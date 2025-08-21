import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav className="navbar">
            <Link to="/" className="navbar-home-link">
                Home
            </Link>
            <button 
                className="navbar-mobile-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className={`navbar-mobile-line ${isMenuOpen ? 'line1-open' : ''}`}></span>
                <span className={`navbar-mobile-line ${isMenuOpen ? 'line2-open' : ''}`}></span>
                <span className={`navbar-mobile-line ${isMenuOpen ? 'line3-open' : ''}`}></span>
            </button>
            <div className="navbar-desktop-menu">
                <Link to="/mentors" className="navbar-link">
                    Mentors
                </Link>
                <Link to="/students" className="navbar-link">
                    Students
                </Link>
                <Link to="/memories" className="navbar-link">
                    Memories
                </Link>
                <Link to="/projects" className="navbar-link">
                    Projects
                </Link>
            </div>
            <div className={`navbar-mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
                <div className="navbar-mobile-menu-content">
                    <Link to="/mentors" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Mentors
                    </Link>
                    <Link to="/students" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Students
                    </Link>
                    <Link to="/memories" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Memories
                    </Link>
                    <Link to="/projects" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    )
}