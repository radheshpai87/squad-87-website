import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 text-white font-medium">
            <Link to="/" className="hover:text-orange-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/45 text-lg font-semibold">
                Home
            </Link>
            <button 
                className="sm:hidden flex flex-col gap-1 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
            <div className="hidden sm:flex gap-4 lg:gap-6">
                <Link to="/mentors" className="hover:text-orange-400 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-white/45 text-sm lg:text-base">
                    Mentors
                </Link>
                <Link to="/students" className="hover:text-orange-400 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-white/45 text-sm lg:text-base">
                    Students
                </Link>
                <Link to="/memories" className="hover:text-orange-400 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-white/45 text-sm lg:text-base">
                    Memories
                </Link>
                <Link to="/projects" className="hover:text-orange-400 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-white/45 text-sm lg:text-base">
                    Projects
                </Link>
            </div>
            <div className={`absolute top-full left-0 right-0 bg-black/10 backdrop-blur-sm sm:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col py-4">
                    <Link to="/mentors" className="hover:text-orange-400 transition-colors duration-300 px-6 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                        Mentors
                    </Link>
                    <Link to="/students" className="hover:text-orange-400 transition-colors duration-300 px-6 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                        Students
                    </Link>
                    <Link to="/memories" className="hover:text-orange-400 transition-colors duration-300 px-6 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                        Memories
                    </Link>
                    <Link to="/projects" className="hover:text-orange-400 transition-colors duration-300 px-6 py-3 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    )
}