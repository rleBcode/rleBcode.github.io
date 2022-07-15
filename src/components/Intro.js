import { Container, Row, Col, Button } from "react-bootstrap"
import logoImage from "../assets/bg/icon1.jpeg"
const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div>
                            <img className="logo-icon" src={logoImage}></img>
                        </div>
                        <div className="title">CLAIR & MOVIES</div>
                        <div className="title">ELITE MOVIES RATER</div>
                        <div className="introButton mt-4 text-center">
                            <button variant="dark">See All List</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Intro