import React from 'react';
import Card from 'react-bootstrap/Card';
import Image1 from '../assets/images/cardimg1.png';
import Imagetext1 from '../assets/images/cardtext1.png';
import Image2 from '../assets/images/cardimg2.png';
import Imagetext2 from '../assets/images/cardtext2.png';
import Image3 from '../assets/images/cardimg3.png';
import Imagetext3 from '../assets/images/cardtext3.png';
import Image4 from '../assets/images/cardimg4.png';
import Imagetext4 from '../assets/images/cardtext4.png';
import Image5 from '../assets/images/cardimg5.png';
import Imagetext5 from '../assets/images/cardtext5.png';
import Image6 from '../assets/images/cardimg6.png';
import Imagetext6 from '../assets/images/cardtext6.png';
import UseCaseImage from '../assets/images/play-use-cases.svg.png';
import DarkArrowImage from '../assets/images/span.png';
import DivImg14 from '../assets/images/div (14).png';
import BenefitImage1 from '../assets/images/benefit1.png';
import BenefitImage2 from '../assets/images/benefit2.png';
import BenefitImage3 from '../assets/images/benefit3.png';
import BenefitImage4 from '../assets/images/benefit4.png';
import CompaniesImage from '../assets/images/bene5.png';
const Offering = () => {
  return (
    <>
    <div className="main" style={{backgroundColor:'#FFF0EC', paddingTop:'30px', paddingBottom:'10px'}}>
      <div className="offerings container">
      <h2 style={{textAlign:'center'}}>People who has published their books using writealy</h2>
              <div className="row" style={{ margin: '20px' }}>

                <div className="col col-sm-12 col-md-4 col-lg-4"> 
                    <Card style={{ width: '18rem', paddingBottom:'25px' }}>
                        <img src={Imagetext1} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image1} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body style={{fontSize:'14px'}}>
                        <Card.Title style={{fontSize:'45px'}}>2x</Card.Title>
                        <Card.Title style={{fontSize:'20px'}}>Increase in search <p>traffic in 4 weeks</p></Card.Title>
                            <Card.Text>
                            “No other competitors were able to mimic our voice and tone like Writer. 
                            With it, we increased our publication cadence dramatically.”
                            </Card.Text>
                            <p><b>Ty Magnin</b></p>
                            <p>Vp of Marketing</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                <img src={Imagetext2} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image2} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body>
                        <Card.Title style={{fontSize:'45px'}}>18x</Card.Title>
                        <Card.Title style={{fontSize:'20px'}}>ROI on Writer <p>investment</p></Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            “Having AI write some stuff under good guidance and under good frameworks frees us up to write the really important stuff. 
                            We’ve had an incredible ROI with Writer.”
                            </Card.Text>
                            <p><b>Tina O'Shea</b></p>
                            <p>Director, Content Design</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                <img src={Imagetext3} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image3} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body>
                        <Card.Title style={{fontSize:'45px'}}>5x</Card.Title>
                        <Card.Title style={{fontSize:'20px'}}>Increase in <p>content output</p></Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            “A tool like Writer is exactly what we needed. It empowers our authors to get writing suggestions on the fly, 
                            and it doesn’t require them to remember all of these rules.”
                            </Card.Text>
                            <p><b>Karl Gabbey</b></p>
                            <p>Head of Knowledge</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row" style={{ margin: '20px' }}>
                <div className="col col-sm-12 col-md-4 col-lg-4"> 
                    <Card style={{ width: '18rem' }}>
                    <img src={Imagetext4} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image4} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body>
                        <Card.Title style={{fontSize:'45px'}}>100%</Card.Title>
                        <Card.Title style={{fontSize:'20px'}}>Brand <p>compliance</p></Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            “As our company quickly grew, Writer helped us scale content without sacrificing our brand voice. It would have taken us hundreds 
                            of hours of copyediting cycles to do what we can do with Writer automatically."
                            </Card.Text>
                            <p><b>Brooke Burdge</b></p>
                            <p>SVP of Brand Marketing</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem', paddingBottom:'20px' }}>
                        <img src={Imagetext5} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image5} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body>
                        <Card.Title style={{fontSize:'45px'}}>23%</Card.Title>
                            <Card.Title style={{fontSize:'20px'}}>Increase in CTRs <p> with better copy</p></Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            “Writer solves real business problems for us, and it was the only AI tool we tried that could do so. 
                            It really did deliver on the promise of freeing up our writers to work on creative strategy.”
                            </Card.Text>
                            <p><b>Ranjan Roy</b></p>
                            <p>Vp of Strategy</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem', paddingBottom:'20px'}}>
                <img src={Imagetext6} alt="imgTitle" width={150} height={70} style={{marginLeft:'15px'}}/>
                        <Card.Img variant="top" src={Image6} style={{width:'100px', height:'100px'}} className="style" />
                        <Card.Body style={{fontSize:'14px'}}>
                            <Card.Title style={{fontSize:'45px'}}>70%</Card.Title>
                            <Card.Title style={{fontSize:'20px'}}>Reduction in <p>editing time</p></Card.Title>
                            <Card.Text>
                            “Being able to present a tool that could literally pay for itself in the amount of time that 
                            it was saving our team and our editors, even by a very conservative estimate — it was a no-brainer.”
                            </Card.Text>
                            <p><b>Deedi Brown</b></p>
                            <p>Senior Editor</p>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    </div>

    <div className="use-cases" style={{backgroundColor:'#FFEEFC', textAlign:'center', paddingTop:'30px'}}>
            <img src={UseCaseImage} alt="playbutton" width={30} height={40}/>
            <p className="use-case-title"><b>USE CASES</b></p>
            <h2> Automate what’s automatable in </h2> <h2> content</h2>
            <p> Writer accelerates your writing workflow, from </p>
            <p> Writing <img src={DarkArrowImage} alt='arrow' width={20} height={20} style={{marginLeft:'5px', marginRight:'5px'}}/>
                Ideation <img src={DarkArrowImage} alt='arrow' width={20} height={20} style={{marginLeft:'5px', marginRight:'5px'}}/>
                Illustrating </p>

                <div className="row" style={{ paddingTop: '30px', paddingBottom: '40px' }}>
      <div className="col-12 col-md-8 col-lg-8 d-flex align-items-center justify-content-center">
        <img
          src={DivImg14}
          alt='welcomeimage'
          className="img-fluid"
          style={{ maxWidth: '100%' }}
        />
      </div>

      <div className="col-12 col-md-4 col-lg-4 mt-3 mt-md-0" style={{ textAlign: 'center' }}>
        <h4>Ideate Faster</h4>
        <p style={{ color: 'gray' }}>Use AI as your brainstorming partner</p>

        <h4>Write Faster</h4>
        <p style={{ color: 'gray' }}>Generate first drafts in seconds</p>

        <h4>Ideate Faster</h4>
        <p style={{ color: 'gray' }}>AI writing platform to unlock</p>
        <p style={{ color: 'gray' }}>brainstorming for publishing a book.</p>

        <h4>Ideate Faster</h4>
        <p style={{ color: 'gray' }}>AI writing platform to unlock</p>
        <p style={{ color: 'gray' }}>brainstorming for publishing a book.</p>
      </div>
    </div>  
        </div>


      <div className="benefits" style={{ backgroundColor: '#FFF0EC', paddingTop: '30px', paddingBottom:'150px'}}>
      <h2 style={{ textAlign: 'center', marginBottom:'30px' }}>B E N E F I T S</h2>

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6' style={{marginTop:'40px'}}>
            <h1>Create content in<br />minutes, not months</h1><br></br>
            <p>Create original content that actually sounds like<br />
              your company wrote it.<br /><br></br>
              Writer is the only AI writing platform that can be<br />
              trained on your own best-performing content<br />
              and brand guidelines.<br /><br></br>
              It's <b style={{backgroundColor:'#9BFFE1'}}>your own AI,</b> specifically tuned for your team's<br />
              unique use cases.</p>
          </div>
          <div className='col-12 col-md-6'>
            <img src={BenefitImage1} alt='benefit-image1' className='img-fluid' />
          </div>
        </div>
      </div>

      <div className='container' style={{marginTop:'100px'}}>
        <div className='row'>
          <div className='col-12 col-md-6' style={{marginTop:'40px'}}>
            <h1>Build a brand that is <br />consistent - everywhere</h1><br></br>
            <p>Generic ad copy. Outdated messaging on your<br />
              website. Poorly-written docs.<br /><br></br>
              All of this can kill a buyer’s journey — and your<br />
              brand. Writer gives you all the tools you need to<br />
              <b style={{backgroundColor:'#9BFFE1'}}>build a consistent brand</b> across every customer<br />
              touchpoint, and do it efficiently.</p>
          </div>
          <div className='col-12 col-md-6'>
            <img src={BenefitImage2} alt='benefit-image1' className='img-fluid' />
          </div>
        </div>
      </div>


      <div className='container' style={{marginTop:'100px'}}>
        <div className='row'>
          <div className='col-12 col-md-6' style={{marginTop:'40px'}}>
            <h1>Drive revenue, not<br />review cycles</h1><br></br>
            <p>'Let's be a media company,’ they say — but<br />
              without the required headcount or budget.<br /><br></br>
              Do it anyway.<br />
              <b style={{backgroundColor:'#9BFFE1'}}>10x the productivity</b>of your best writers, and<br />
              make it so everyone else in the company can<br /><br></br>
              contribute on-brand content, too — without the<br />
              rewrites.</p>
          </div>
          <div className='col-12 col-md-6'>
            <img src={BenefitImage3} alt='benefit-image1' className='img-fluid' />
          </div>
        </div>
      </div>


      <div className='container' style={{marginTop:'100px'}}>
        <div className='row'>
          <div className='col-12 col-md-6' style={{marginTop:'40px'}}>
            <h1>Be secure with<br />enterprise features</h1><br></br>
            <p>What you write will never make it into our models.<br />
            Your data is analyzed transiently, so what you<br /><br></br>
            edit or generate isn’t collected or used by Writer.<br /><br></br>
            Writer is the only AI writing platform that both<br />
            users and infosec teams love.</p>
            <img src={CompaniesImage} alt='company-logos' width={460} height={100}/>
          </div>
          <div className='col-12 col-md-6'>
            <img src={BenefitImage4} alt='benefit-image1' className='img-fluid' />
          </div>
        </div>
      </div>


    </div>
    </>
  );
}

export default Offering;