import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Card, Row } from 'react-bootstrap';
import { CardContainer, H4, H5, H6 } from './style';
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

              <H4>Abyssinian</H4>
              <H5>Origin: Egypt</H5>
              <H6>Affectionate, Social, Intelligent, Playful, Active</H6>
              
              <Card.Text>
                The Abyssinian is easy to care for, and a joy to have in your home. 
                They’re affectionate cats and love both people and other animals.
              </Card.Text>
            </Card.Body>
        </CardContainer>
      </Row>
    </Container>
  );
}

export default CatSinglePage;

