import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

const NavbarComponent2 = () => {
    return (
        <>
            <Navbar className="shadow py-3" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="fs-4 text-white">MiniProject</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color:"white" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to={`/project-exam`} className="nav-link fs-5 text-white">Home</Link>
                            <Link to={`/tools/menu`} className="nav-link fs-5 text-white">Tools</Link>
                            <Link to={`/mini-games/menu`} className="nav-link fs-5 text-white">Mini Game</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent2