import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ava from '../../assets/copy.jpg'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
           <Image fluid rounded='true' src={Ava}/>
        </Col>
        <Col md="auto">Second Image</Col>
        <Col xs lg="2">
          Text
        </Col>
      </Row>
    </Container>
  );
}

export default About;