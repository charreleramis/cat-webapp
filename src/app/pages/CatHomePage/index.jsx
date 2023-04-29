import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Form, Card } from 'react-bootstrap';

import { HeadingText, LoadButton, CatItemContainer } from './style';
import Method from '../CatHomePage/method';

const CatHomePage = () => {
  const { redirectCatDetails } = Method();
    return (
      <Container>
        <Row>
          <Col>
           
           <HeadingText>Cat Browser</HeadingText>

           <Form.Group controlId="formBasicSelect">
            <Form.Label>Breed</Form.Label>
            <Form.Control
              as="select"
              // value={type}
              // onChange={e => {
              //   console.log("e.target.value", e.target.value);
              //   setType(e.target.value);
              // }}
              >
              <option value="DICTUM">Select breed</option>
              <option value="CONSTANCY">Constancia</option>
              <option value="COMPLEMENT">Complemento</option>
          </Form.Control>
        </Form.Group>

          <CatItemContainer>
            <Row>
              <Col>
                <Card className='mb-3' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
                  <Card.Body>
                    <Button variant="primary" onClick={redirectCatDetails}>View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='mb-3' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
                  <Card.Body>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className='mb-3' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
                  <Card.Body>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className='mb-3' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
                  <Card.Body>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CatItemContainer>

          <LoadButton variant="success">Load more</LoadButton>
          </Col>
        </Row>
      </Container>
  );
}

export default CatHomePage;
