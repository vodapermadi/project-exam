import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

const NavbarComponent = () => {
    return (
        <>
            <Navbar className="shadow py-3 fixed-top" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="fs-4 text-white">MiniProject</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to={`/`} className="nav-link fs-5 text-white">Home</Link>
                            <Nav.Link href="#todolist" className="fs-5 text-white">Todolist</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent