import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import logo from "../images/logo.png";
import "./layout.css";


const TopBar = (props) => {


    const [isOpen,setIsOpen] = useState(false);
    const toggle = (e) => {
        setIsOpen(!isOpen);    
    }

    return (
        <React.Fragment>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={logo} width="50%" /></NavbarBrand>
                <NavbarToggler onClick={(e)=> {toggle(e)}} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )

}
export default TopBar;