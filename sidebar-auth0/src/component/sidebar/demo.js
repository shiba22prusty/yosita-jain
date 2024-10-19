import React, { useState } from 'react'
import './demo.css';
import { SidebarDeta } from './SidebarDeta';

const SidebarDemo = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`sidebar ${!isOpen ? 'closed' : ''}`}>
            <div className='sidebar-header'>
                <button className='toggle-button' onClick={toggleSidebar}>
                    <div className={`arrow ${isOpen ? 'left' : 'right'}`}></div>
                </button>
                <div className='logo'>
                    <h2>{isOpen ? "My App" : ""}</h2>
                </div>
            </div>
            <nav className='nav-name'>
                <ul>
                    {SidebarDeta?.map((item, index) => (
                        <li key={index}>
                            <a href={item.path}>
                                {item.icon}
                                {isOpen ? item.title : ""}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SidebarDemo;
