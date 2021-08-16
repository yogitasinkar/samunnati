import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { Link} from 'react-router-dom';

import brand from '../../images/sam.png'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white"  expand="md">
        <Container>
        <NavbarBrand>
          <img src={brand} alt='coca-cola' style={{width: '300px', height: '100px'}}/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <Link className='nav-link' to='/' >HOME </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/vision">VISION </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/journey">JOURNEY </Link>
            </NavItem> */}
            <NavItem>
              <Link className='nav-link' to="/our-actions">FPO MAPPING TOOL</Link>
            </NavItem>
            {/* <NavItem>
              <Link className='nav-link' to="/reports">REPORTS</Link>
            </NavItem> */}
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;