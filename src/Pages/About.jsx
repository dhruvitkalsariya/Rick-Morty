import React from 'react'

// Custom Component
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Edit from '../Component/Edit'

// Component
import { Container , Row , Col } from 'react-bootstrap'

// Routing
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const About = () => {
  return (
    <>
      <Header/>
        <Container className='my-5'>
            <Row className='  justify-content-center'>
              <Col md={10}>
                <Col className='mb-5'>
                  <h1 className='fw-800 mb-5'>About</h1>
                  <h4 className='fw-800 mb-3'>What is this?</h4>
                  <p className='mb-3'>The Rick and Morty API is a REST(ish) and GraphQL API based on the television show
                     <span className="line mx-1">
                         <Link to="/">Rick and Morty</Link>.
                      </span>
                      You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.
                  </p>
                  <span className='line'>
                        <Link to="/"> Check out the documentation to get started </Link>
                  </span>
                </Col>
                <Col className='mb-5'>
                  <h4 className='fw-800 mb-3'>Who are you?</h4>
                  <p className='mb-3'>We are
                     <span className="line mx-1">
                         <Link to="/"> Axel Fuhrmann</Link>,
                      </span>
                      a guy who likes to develop things and
                     <span className="line mx-1">
                         <Link to="/">Talita</Link>,
                      </span>
                      the "Rick and Morty data scientist" and hardcore fan.
                  </p>
                </Col>
                <Col className='mb-5'>
                  <h4 className='fw-800 mb-3'>Why did you build this?</h4>
                  <p className='mb-3'>Because we were really interested in the idea of writing an open source project and also because Rick and Morty is our favorite show at that moment, so why not?
                  </p>
                </Col>
                <Col className='mb-5'>
                  <h4 className='fw-800 mb-3'>Technical stuff?</h4>
                  <p className='mb-3'>The entire project is hosted on
                     <span className="line mx-1">
                         <Link to="/">Digital Ocean</Link>
                      </span>
                      and
                     <span className="line mx-1">
                         <Link to="/">Netlify</Link>.
                      </span>
                      GraphQL cache is handled through
                     <span className="line mx-1">
                         <Link to="/">Stellate</Link>.
                      </span>
                      We use
                     <span className="line mx-1">
                         <Link to="/">Node</Link>
                      </span>
                      and
                     <span className="line mx-1">
                         <Link to="/">MongoDB</Link>
                      </span>
                      to serve the API.
                  </p>
                </Col>
                <Col className='mb-5'>
                  <h4 className='fw-800 mb-3'>How can I contribute to the project?</h4>
                  <p className='mb-3'>You can 
                     <span className="line mx-1">
                         <Link to="/">help us to keep the project alive </Link>
                      </span>
                      and you can also contribute on
                     <span className="line mx-1">
                         <Link to="/">Github.</Link>
                      </span>
                  </p>
                </Col>
                <Col className='mb-5'>
                  <h4 className='fw-800 mb-3'>Copyright?</h4>
                  <p className='mb-3'>Rick and Morty is created by Justin Roiland and Dan Harmon for
                     <span className="line mx-1">
                         <Link to="/">Adult Swim</Link>
                      </span>
                      . The data and images are used without claim of ownership and belong to their respective owners.
                  </p>
                     <span>This API is open source and uses a BSD license.</span>
                </Col>               
              </Col>
            </Row>
        </Container>
        <Edit/>
      <Footer/>
    </>
  )
}

export default About
