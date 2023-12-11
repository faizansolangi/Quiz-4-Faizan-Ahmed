import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLogo from '../assets/images/footer-logo.png';
import FacebookLogo from '../assets/images/facebook.png';
import TwitterLogo from '../assets/images/twitter.png';
import LinkedInLogo from '../assets/images/linkedin.png';


function Footer() {
    return (
      <footer className="mt-5" style={{backgroundColor:'black', color:'white', paddingTop:'50px'}}>
      <Container>
        <Row>
          <Col md={2}>
            <img src={FooterLogo} alt='logo' width={50} height={50} />
          </Col>

          <Col md={2}>
            <h5>Products</h5>
            <p>Security</p>
            <p>Writer for Chrome</p>
            <p>Writer for Containful</p>
            <p>Writer for Figma</p>
            <p>Grammarly alternative</p>
            <p>Request a demo</p>
            <p>Try for free</p>
          </Col>

          <Col md={2}>
            <h5>Resources</h5>
            <p>Blogs</p>
            <p>Guides</p>
            <p>Inclusive language</p>
            <p>Style guide template</p>
            <p>Terminology management</p>
            <p>AI content detector</p>
            <p>Free grammar check</p>
          </Col>

          <Col md={2}>
            <h5>Company</h5>
            <p>Careers</p>
            <p>Fortners</p>
            <p>Contact us</p>
          </Col>

          <Col md={2}>
            <h5>Support</h5>
            <p>Help center</p>
            <p>API</p>
            <p>Status</p>
          </Col>

        </Row>

        <Row style={{marginTop:'80px', paddingBottom:'200px'}}>
          
          <Col md={4}>
            <h5>&copy; 2 0 2 3 W R I T E A L Y</h5>
          </Col>

          <Col md={4}>
            <img src={FacebookLogo} alt='facebook-icon' width={50} height={50} />
            <img src={TwitterLogo} alt='facebook-icon' width={50} height={50} style={{marginLeft:'15px'}}/>
            <img src={LinkedInLogo} alt='facebook-icon' width={50} height={50} style={{marginLeft:'15px'}}/>
          </Col>

          <Col md={4}>
            <h5> T E R M S | P R I V A C Y</h5>
          </Col>

        </Row>

      </Container>
      </footer>

    );
  }
  
  export default Footer;