import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Card, Row, Col } from 'react-bootstrap';
import { CardContainer, H4, H5, H6 } from './style';
import Method from './method';

const CatSinglePage = () => {
  const { redirectHome, details } = Method();
  const { url, breeds } = details;

  return (
    <Container>
      <Row className="justify-content-md-center">
        
        <Col xs lg="10">
        { breeds ? 
          <CardContainer>
            <Card.Header>
                  <Button variant="primary" onClick={redirectHome}>Back</Button>
              </Card.Header>
              <Card.Img variant="top" src={url} />
              <Card.Body>

                <H4>{breeds[0].name}</H4>
                <H5>Origin: {breeds[0].origin}</H5>
                <H6>{breeds[0].temperament}</H6>
                
                <Card.Text>
                  {breeds[0].description}
                </Card.Text>
              </Card.Body>
          </CardContainer>
        : <></>
      }
        </Col>
      </Row>



      {/* { breeds ? 
          <CardContainer>
            <Card.Header>
                  <Button variant="primary" onClick={redirectHome}>Back</Button>
              </Card.Header>
              <Card.Img variant="top" src={url} />
              <Card.Body>

                <H4>{breeds[0].name}</H4>
                <H5>Origin: {breeds[0].origin}</H5>
                <H6>{breeds[0].temperament}</H6>
                
                <Card.Text>
                  {breeds[0].description}
                </Card.Text>
              </Card.Body>
          </CardContainer>
        : <></>
      } */}

    </Container>
  );
}

export default CatSinglePage;

