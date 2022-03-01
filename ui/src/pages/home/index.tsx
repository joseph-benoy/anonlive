import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header";

const Home:React.FC = ():JSX.Element=>{
    return(<>
        <Header/>
        <Container>
            <Row>
                <Col lg={6}>
                    <h1>Go live in just one click</h1>
                    <p>Meet your audience in just one click</p>
                    <Button variant='primary'>Go live</Button>
                    <Button variant='primary'>Chatroom</Button>
                </Col>
                <Col lg={6}>
                    <img src='/images/hero.png'/>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Home;