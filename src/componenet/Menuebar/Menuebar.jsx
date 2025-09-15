import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AppContext } from "../../context/AppContext.jsx";
import "./Menubar.css";

const Menubar = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext);

    // Add theme attribute to body for CSS targeting
    useEffect(() => {
        document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <Navbar expand="lg" className="menubar">
            <Container fluid>
                {/* Brand */}
                <Navbar.Brand as={NavLink} to="/" end>
                    RKB
                </Navbar.Brand>

                {/* Mobile Toggle */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* Nav Links */}
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/" end>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/all-jobs">
                            All Jobs
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/add-job">
                            Add Job
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard">
                            Dashboard
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/aiSupport">
                            AI Support
                        </Nav.Link>
                    </Nav>

                    {/* Search Bar */}
                    <Form className="d-flex me-3">
                        <Form.Control
                            type="search"
                            placeholder="Search jobs..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    {/* Dark Mode Toggle */}
                    <Button
                        variant={darkMode ? "dark" : "light"}
                        onClick={toggleDarkMode}
                        className="ms-2"
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;
