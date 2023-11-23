import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    
    return (
        <nav className="bg-blue-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-between">
                        <h1 className="text-white font-bold">
                            <img src='logo.jpg' alt='logo' height={60} width={60} className=' rounded-full'></img>
                        </h1> 
                        
                        <div className='hidden sm:flex justify-around p-2 m-4'>
                            <NavLink to="/" className=" font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</NavLink>
                            <NavLink to="/about" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About</NavLink>
                            <NavLink to="/service" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Service</NavLink>
                            <NavLink to="/team" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Team</NavLink>
                            <NavLink to="/contact" className="font-bold text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact</NavLink>
                        </div>
                        
                    </div>

                   
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:hidden">
                        <button 
                            className="text-white hover:text-white block focus:outline-none"
                            onClick={() => setShowLinks(!showLinks)}
                            
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>

                        <div className={`sm:hidden ${showLinks ? 'flex' : 'hidden'}`} 
                            style={{ flexDirection: 'column', position: 'absolute', top: '4rem', right: '0', 
                            backgroundColor: 'blue', padding: '1rem', 
                            transition: 'transform 0.3s ease-in-out', 
                            transform: showLinks ? 'translateX(0)' : 'translateX(100%)',
                            width: '15rem',
                            zIndex: '999',
                        }}
                        >
                            
                        <NavLink to="/" className=" font-bold block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</NavLink>
                        <NavLink to="/about" className=" font-boldblock text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About</NavLink>
                        <NavLink to="/service" className=" font-boldblock text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Service</NavLink>
                        <NavLink to="/team" className=" font-boldblock text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Team</NavLink>
                        <NavLink to="/contact" className="  font-bold block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
