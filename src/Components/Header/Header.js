import React, { useEffect, useContext } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import logo from '../../images/logo.png';
import fakeData from '../../fakeData';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';


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
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const signOut = () =>{
        sessionStorage.removeItem('token');
        setLoggedInUser({});
    }
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
                    <Nav className=" ml-5 `nnav-menu mr-auto">
                        <Nav.Link><Link className="link-path" to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="link-path" to="/shop">Shop</Link></Nav.Link>
                        <Nav.Link><Link className="link-path" to="/review">Review</Link></Nav.Link>
                        <Nav.Link><Link className="link-path" to="/inventory">Manager Inventory</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" style={{ color: "white", marginRight: "10px" }}><FontAwesomeIcon icon={faShoppingCart} /> {cart.length} </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-4 mb-3 mb-md-0" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <Button className="ml-2" onClick={signOut}>Sign out</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;