import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from "../assets/images/logo.png";
import "./Header.css"
import Emails from "../assets/icons/envelope.svg";
import User from "../assets/icons/User.svg";
import LeftArrow from "../assets/icons/left-arrow.svg";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import * as MdIcons  from "react-icons/md";
import * as ImIcons from 'react-icons/im';

import './Sidebar.css';
import { SidebarData } from './SidebarData';

const Header = (props) => {

    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="Header">
      <Container>
        <Row>
            <Col xs={4}>
                <div className="d-flex align-items-center">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link> &nbsp; &nbsp;
                    <img src={Logo} width="80" alt="Logo" />
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
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
            </Col>
            <Col xs={8} className="d-flex align-items-center">
                <div className="ml-auto">
                    <Button className="bgN" href="mailto:abc@example.com">
                        <img src={Emails} width="30" alt="Logo" />
                    </Button>
                    <Link to="/profile" className="mr10">
                        <img src={User} width="30" alt="Logo" />
                    </Link>
                    <Button variant="info" href="/">Log Out</Button>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  );
};

export default Header;
