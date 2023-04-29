import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Card, Row } from 'react-bootstrap';
import { LoadButton, CardContainer } from './style';
import Method from './method';

const CatSinglePage = () => {
  const { redirectHome } = Method();
  return (
    <Container>
      <Row className="justify-content-md-center">
        <CardContainer>
          <Card.Header>
                <Button variant="primary" onClick={redirectHome}>Back</Button>
            </Card.Header>
            <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Title>Origin: Greece</Card.Title>
              <Card.Title>Affectionate, Social, Intelligent, Playful, Active</Card.Title>
              
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
        </CardContainer>
      </Row>
    </Container>
  );
}

export default CatSinglePage;

