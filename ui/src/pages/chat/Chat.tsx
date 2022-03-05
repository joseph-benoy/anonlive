import React from "react";
import { Container ,Form,Button, Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
const Chat:React.FC = ():JSX.Element=>{
    const nav = useNavigate();
    const goToNew = ()=>{
        nav("new");
    }
    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter the room code" />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Button variant="primary">Join room</Button>
                    </Col>
                    <Col lg={4}>
                        <Button variant="primary" onClick={goToNew}>Create room</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Chat;