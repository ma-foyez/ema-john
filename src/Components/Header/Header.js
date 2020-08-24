import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import logo from '../../images/logo.png';


const Header = (props) => {
  
    return (
        <div className="header-container">
            <div className="logo-container container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <img src={logo} alt="" className="w-75" />
                    </div>
                </div>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="text-center nav-menu mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#review">Review</Nav.Link>
                        <Nav.Link href="#manage">Manager Inventory</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#" style={{ color: "white", marginRight: "10px" }}><FontAwesomeIcon icon={faShoppingCart} /> 0 </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-4 mb-3 mb-md-0" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;