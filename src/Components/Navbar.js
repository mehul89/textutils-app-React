import React from 'react';
import textlogo from '../images/favicon.jpg';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

export default function Navbar(props) {
    return (
        <header>
            <nav className={`bg-${props.mode === 'white' ? 'white' : 'black'}   border-gray-200 px-4 lg:px-6 py-7 drop-shadow-lg `} >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/*  logo  */}
                    <a href="/" className="flex items-center">
                        <img src={textlogo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className={`text-${props.mode === 'white' ? 'black' : 'white'} text-lg font-semibold font-mono`}>Textutils</span>
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/mehul89" target="_blank" rel="noreferrer" className={`text-${props.mode === 'white' ? 'black' : 'white'} hover:text-[#77579d] `}>
                            <FaGithub size={27} />
                        </a>
                        <a href="https://www.linkedin.com/in/mehul-chapaneri/" target="_blank" rel="noreferrer"  className={` text-${props.mode === 'white' ? 'black' : 'white'} hover:text-[#0072b1] `}>
                            <FaLinkedin size={27} />
                        </a>
                        <a href="https://www.instagram.com/mehul_8988/" target="_blank" rel="noreferrer"  className={` text-${props.mode === 'white' ? 'black' : 'white'} hover:text-[#E1306C] `}>
                            <FaInstagram size={27} />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer"  className={` text-${props.mode === 'white' ? 'black' : 'white'}  hover:text-blue-700 `}>
                            <BiWorld size={27} />
                        </a>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" onClick={props.toggleMode} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-[#7f8999]">Dark mode</span>
                    </label>
                </div>
            </nav>
        </header>
    );
}