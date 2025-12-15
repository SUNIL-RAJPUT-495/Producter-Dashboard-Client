import {Container,Row,Col} from "react-bootstrap"
import { Form } from "react-router-dom"
export const Dashboard = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={2}> 
            <div>Productr</div>
            <input type="text" placeholder="Search" />
            <br />
            <div>Home</div>
            <div>Products</div>
            </Col>
        </Row>
        </Container>
        </>
  )
}

