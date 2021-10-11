import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoLeaf } from 'react-icons/io5';
import { BsHouseFill } from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <IoLeaf />,
    cName: 'nav-text'
  },
  {
    title: 'Properties',
    path: '/properties',
    icon: <BsHouseFill />,
    cName: 'nav-text'
  },
  {
    title: 'Add a Property',
    path: '/properties/new',
    icon: <FiPlus />,
    cName: 'nav-text'
  },
];