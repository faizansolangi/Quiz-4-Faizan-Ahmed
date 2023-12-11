import React from 'react';
import Button from 'react-bootstrap/Button';
import welcomeImg from '../assets/images/welcome image.png';
import ToolsImg from '../assets/images/div (1).png';
import ArrowImg from '../assets/images/a_after.png';

function Welcome() {
  return (
    <div className='welcome' style={{ backgroundColor: '#FFF0EC' }}>
      <div className="container" style={{ paddingTop: '30px', paddingBottom: '40px' }}>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <h1>Brainstorm</h1>
            <h2>your book</h2>
            <h2>easily.</h2>
            <p style={{ color: 'gray' }}>World-class companies use Writealy</p>
            <p style={{ color: 'gray' }}>AI writing platform to unlock</p>
            <p style={{ color: 'gray' }}>brainstorming for publishing a book.</p>
            <Button size="lg" className="mb-2" style={{ backgroundColor: '#FFF0EC', color: 'black', borderColor: 'black', borderRadius: '30px' }}>
              <b>Request a demo</b>
            </Button>
            <Button size="lg" style={{ backgroundColor: '#EB7A65', color: 'white', borderColor: 'black', borderRadius: '30px', marginLeft: '10px' }}>
              <b>Try for free</b>
            </Button>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img src={welcomeImg} alt='welcomeimage' className="img-fluid" />
            <p style={{ marginTop: '30px' }}> <b>Watch the product overview</b> 3 min </p>
          </div>
        </div>
      </div>

      <div className='services' style={{ backgroundColor: '#EB7A65', paddingTop: '30px', paddingBottom: '30px', textAlign: 'center' }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <p>
          <b>The world’s most effective content teams use Writer </b>
          <img src={ArrowImg} alt='welcomeimage' className="ml-2" style={{ backgroundColor: 'white', borderRadius: '50%' }} width={30} height={30} />
        </p>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        <img src={ToolsImg} alt="providedtools" className="img-fluid" />
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Welcome;
