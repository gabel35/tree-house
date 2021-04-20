import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import * as MdIcons  from "react-icons/md";
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Pets',
    path: '/pets',
    icon: <MdIcons.MdPets />,
    cName: 'nav-text'
  },
  {
    title: 'Children',
    path: '/children',
    icon: <MdIcons.MdChildCare />,
    cName: 'nav-text'
  },
  {
    title: 'Events',
    path: '/events',
    icon: <MdIcons.MdEventAvailable />,
    cName: 'nav-text'
  },
  {
    title: 'Sport',
    path: '/sport',
    icon: <BiIcons.BiFootball />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];