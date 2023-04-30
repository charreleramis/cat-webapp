import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form, Card } from 'react-bootstrap';
import { HeadingText, LoadButton, CatItemContainer, ErrorNotification } from './style';
import Method from '../CatHomePage/method';


const CatHomePage = () => {
  const { 
    breeds, 
    selectedBreed, 
    cats,
    isDisableLoadButton,
    error,
    redirectCatDetails, 
    handleLoadMore, 
    handleChangeBreed,
    isDisabled,
    isDisableBreedInput,
    randomkey
  } = Method();


  return (
      <Container>
        <HeadingText>Cat Browser</HeadingText>
        <Row>
          <Col sm={3}>
          <Form.Group controlId="formBasicSelect" disabled={isDisableBreedInput()}>
            <Form.Label>Breed</Form.Label>
            <Form.Select aria-label="Default select example" 
              value={selectedBreed} 
              onChange={handleChangeBreed} 
              disabled={breeds.length ? false : true}>

                <option value={""}>Select breed</option>
                { breeds.map((item) => {
                  return <option key={item.id} value={item.id}>{item.name}</option>;
                })}

            </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        { error ? 
          <ErrorNotification variant="danger" dismissible>
            <p>{error}</p>
          </ErrorNotification> : <></>
        }

        <CatItemContainer>
            {
              cats.map((item, index) => {
                return(
                  <Row key={index}>
                    { item.map((cat) => {
                        return (
                        <Col sm={3} key={randomkey()}>
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

          { isDisabled() ? <h5> No cats available</h5> : <></> }

          { isDisableLoadButton ? <></> :
            <LoadButton variant="success" onClick={handleLoadMore}>
              Load more
            </LoadButton>
          }
          
    
      </Container>
  );
}

export default CatHomePage;
