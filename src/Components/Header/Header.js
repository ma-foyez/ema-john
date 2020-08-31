import React, { useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import logo from '../../images/logo.png';
import fakeData from '../../fakeData';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';


const Header = (props) => {
    const first15 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first15);
    const [cart, setCart] = useState([]);

    // called local database
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousProduct = productKeys.map(exitingKey => {
            const product = fakeData.find(pd => pd.key === exitingKey);
            product.quantity = savedCart[exitingKey];
            return product;
        })
        setCart(previousProduct);
    }, [])

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
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/review">Review</Nav.Link>
                        <Nav.Link href="/inventory">Manager Inventory</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#" style={{ color: "white", marginRight: "10px" }}><FontAwesomeIcon icon={faShoppingCart} /> {cart.length} </Nav.Link>
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