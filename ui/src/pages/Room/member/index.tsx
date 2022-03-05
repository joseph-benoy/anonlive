import "./Room.scss";
import React, { useEffect, useState } from "react";
import { Navbar,Container,Nav, Row, Col } from "react-bootstrap";
import axios from "axios";
const Member:React.FC = ():JSX.Element=>{
    const [members,setMembers] = useState<Array<string>>();
    useEffect(()=>{
        const loadMembers = async()=>{
            try{
                const res = await axios.get("/dummy/members.json");
                setMembers(res.data);
            }
            catch(e){
                alert("Couldnt fetch members");
            }
        }
        loadMembers();
    },[]);
    return(
        <>
            <header>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="/home" className="logo">AnonLive</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link>settings</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Container fluid>
                    <Row>
                        <Col lg={3}>
                            <Row>
                                <Col lg={12}>
                                    <ul>
                                        {
                                            members?.map((item:string)=>(
                                                <li>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className="chatNotificationBox">

                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={9}>
                                <h1>Member</h1>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Member;