import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import news1 from "./news1.png";
import news2 from "./news2.png";
import news3 from "./news3.png";
import news4 from "./news4.png";
import news5 from "./news5.png";
import news6 from "./news6.png";
import news7 from "./news7.png";
import news8 from "./news8.png";
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function News() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 4; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    
    return (
        <>
        <div className="news-head">
            <h1>News</h1>
        </div>
        <div className="pagination__number"><Pagination>{items}</Pagination></div>
        <CardDeck>
            <Card>
            <Card.Img variant="top" src={news1}/>
            <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
            <Button variant="primary" type="submit">
    MORE
  </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={news2} />
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
            </Card.Text>
            <Button variant="primary" type="submit">
            MORE
  </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={news3} />
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
            </Card.Text>
            <Button variant="primary" type="submit">
            MORE
  </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={news4}/>
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
            </Card.Text>
            <Button variant="primary" type="submit">
            MORE
  </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={news5} />
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
            </Card.Text>
            <Button variant="primary" type="submit">
            MORE
  </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={news6} />
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
            </Card.Text>
            <Button variant="primary" type="submit">
            MORE
  </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={news7} />
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
            </Card.Text>
            <Button variant="primary" type="submit">
            MORE
  </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={news8} />
          <Card.Body>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
            </Card.Text>
            <Button variant="primary" type="submit">
            MORE
  </Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <div className="pagination__number"><Pagination>{items}</Pagination></div>
      <div className="footer.btm">
  <footer>
  <Row>
    <Col sm><i class="fab fa-vimeo-v"></i><i class="fab fa-youtube"></i></Col>
    <Col sm>hello@yay.com</Col>
    <Col sm>Copyright 2020</Col>
  </Row>
  </footer>
</div>
      </>
    );
}

export default News
