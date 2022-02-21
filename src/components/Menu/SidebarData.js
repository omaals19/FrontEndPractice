import * as React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About us',
        path: '/About_us',
        icon: <AiIcons.AiFillInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Stream',
        path: '/Stream',
        icon: <AiIcons.AiFillVideoCamera/>,
        cName: 'nav-text'
    },
    {
        title: 'Gps',
        path: '/Gps',
        icon: <MdIcons.MdGpsFixed/>,
        cName: 'nav-text'
    },
]