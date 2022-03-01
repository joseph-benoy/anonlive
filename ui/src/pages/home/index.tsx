import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

const Home:React.FC = ():JSX.Element=>{
    const nav  = useNavigate();
    return(<>
        <Header/>
        <Container>
            <Row>
                <Col lg={6}>
                    <h1>Go live in just one click</h1>
                    <p>Meet your audience in just one click</p>
                    <Button variant='primary' onClick={()=>nav("/live")}>Go live</Button>
                    <Button variant='primary' onClick={()=>nav("/chat")}>Chatroom</Button>
                </Col>
                <Col lg={6}>
                    <img src='/images/hero.png' alt="anonlive home"/>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Home;