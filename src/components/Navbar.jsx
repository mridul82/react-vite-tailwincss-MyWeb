import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    
    return (
        <nav className="bg-blue-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-bold flex items-center">
                            <img src='logo.jpg' alt='logo' height={60} width={60} className='rounded-full' />
                            {/* You can adjust the spacing between the logo and text */}
                            <span className="ml-2">Your Brand</span>
                        </Link> 
                    </div>

                    {/* Navbar links */}
                    <div className="hidden sm:flex items-center">
                        <NavLink to="/" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</NavLink>
                        <NavLink to="/about" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About</NavLink>
                        <NavLink to="/service" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Service</NavLink>
                        <NavLink to="/team" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Team</NavLink>
                        <NavLink to="/contact" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact</NavLink>
                    </div>

                    {/* Hamburger menu for mobile */}
                    <div className="sm:hidden">
                        <button 
                            className="text-white hover:text-white block focus:outline-none"
                            onClick={() => setShowLinks(!showLinks)}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown menu */}
                <div className={`sm:hidden ${showLinks ? 'block' : 'hidden'} mt-2`}>
                    <div className="flex flex-col items-center">
                        <NavLink to="/" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</NavLink>
                        <NavLink to="/about" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About</NavLink>
                        <NavLink to="/service" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Service</NavLink>
                        <NavLink to="/team" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Team</NavLink>
                        <NavLink to="/contact" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
