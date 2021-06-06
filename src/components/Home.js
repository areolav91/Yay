import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from "./carousel1.jpg";
import carousel2 from "./carousel2.jpg";
import carousel3 from "./carousel3.jpg";
import tv1 from "./tv1.png";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function home() {
    return (
        <><Carousel controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      <div className="main">
          <h1>We do YAY things</h1>
          <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
          <Tabs defaultActiveKey="First" transition={false} id="noanim-tab-example">
  <Tab eventKey="First" title="First">
    <Row>
      <Col>
      <img src={tv1} alt="tv" fluid/>
      </Col>
      <Col>
      <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
      <div className="Sc"><p>SHARE<i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i></p></div></Col>
    </Row>
  </Tab>
  <Tab eventKey="Second" title="Second" disabled>
  </Tab>
  <Tab eventKey="Third" title="Third" disabled>
  </Tab>
</Tabs>
</div>
<div className="footer">
  <footer>
  <Row>
    <Col sm><i class="fab fa-vimeo-v"></i>
    <i class="fab fa-youtube"></i></Col>
    <Col sm>hello@yay.com</Col>
    <Col sm>Copyright 2020</Col>
  </Row>
  </footer>
</div>
</>
    );
}

export default home
