import "./header.scss";
import React from "react";
import { Navbar,Container ,Nav} from "react-bootstrap";

const Header:React.FC = ():JSX.Element=>{
    return(
        <header>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/home" className="logo">AnonLive</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/popular">Popular</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;