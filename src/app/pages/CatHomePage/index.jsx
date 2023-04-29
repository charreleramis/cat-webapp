import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form, Card } from 'react-bootstrap';
import { HeadingText, LoadButton, CatItemContainer } from './style';
import Method from '../CatHomePage/method';


const CatHomePage = () => {
  const { breeds, selectedBreed, cats, setSelectedBreed, redirectCatDetails } = Method();

  const handleChangeBreed = (e) => {
    setSelectedBreed(e.target.value);
  }


  return (
      <Container>
        <HeadingText>Cat Browser</HeadingText>
        <Row>
          <Col sm={3}>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>Breed</Form.Label>
            <Form.Select aria-label="Default select example" value={selectedBreed} onChange={handleChangeBreed}>
              <option>Select breed</option>
              { breeds.map((item) => {
                return <option key={item.id} value={item.id}>{item.name}</option>;
              })}
            </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <CatItemContainer>
            {
              cats.map((item, index) => {
                return(
                  <Row key={index}>
                    { item.map((cat) => {
                        return (
                        <Col sm={3} key={cat.id}>
                          <Card className='mb-3'>
                            <Card.Img variant="top" src={cat.url} />
                            <Card.Body>
                              <Button variant="primary" onClick={() => redirectCatDetails(cat.id)}>View Details</Button>
                            </Card.Body>
                          </Card>
                        </Col> 
                        );
                      })
                    }
                  </Row>
                )
              })
            }
        </CatItemContainer>


    
          {
            !selectedBreed || selectedBreed == "Select breed"
            ? <h5> No cats available</h5> : 
            <></>
          }

          <LoadButton variant="success">Load more</LoadButton>
    
      </Container>
  );
}

export default CatHomePage;
