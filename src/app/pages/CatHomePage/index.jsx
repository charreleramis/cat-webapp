import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Form, Card } from 'react-bootstrap';

import { HeadingText, LoadButton, CatItemContainer } from './style';
import Method from '../CatHomePage/method';

const CatHomePage = () => {
  const { redirectCatDetails, breeds } = Method();
    return (
      <Container>
        <HeadingText>Cat Browser</HeadingText>
        <Row>
          <Col sm={3}>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>Breed</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select breed</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </Form.Group>
          </Col>
        </Row>

           
          <CatItemContainer>
            <Row>
              <Col sm={3}>
                <Card className='mb-3'>
                  <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
                  <Card.Body>
                    <Button variant="primary" onClick={redirectCatDetails}>View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='mb-3'>
                  <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
                  <Card.Body>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={3}>
                <Card className='mb-3'>
                  <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
                  <Card.Body>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={3}>
                <Card className='mb-3'>
                  <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
                  <Card.Body>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CatItemContainer>

          <LoadButton variant="success">Load more</LoadButton>
    
      </Container>
  );
}

export default CatHomePage;
