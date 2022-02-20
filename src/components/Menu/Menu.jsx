import * as React from "react";
import {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Menu.css';
import  {IconContext} from 'react-icons';
import Logo from './whiteLogo.svg';
function Menu () {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)


    return (
        <>
         <IconContext.Provider value={{color: '#fff'}}>

        <div className="Menu">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick ={showSidebar}/>
        </Link>
            <img className='logo' alt='daily smarty ui image logo big' src={Logo}/>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className = 'menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
         </IconContext.Provider>
        </>
    )
}

export default Menu;
