



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AppContext } from '../../context/AppContext.jsx';

const Menubar = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">RKB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                        {/*<NavDropdown title="Link" id="navbarScrollingDropdown">*/}
                        {/*    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action4">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action5">*/}
                        {/*        Something else here*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}

                        <Nav.Link as={Link} to="/all-jobs">
                            ALLJOBS
                        </Nav.Link>

                        <Nav.Link as={Link} to="/add-job">
                            ADDJOB
                        </Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Button
                        variant={darkMode ? "dark" : "light"}
                        onClick={toggleDarkMode}
                        className="ms-3"
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;
