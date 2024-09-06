import React from 'react'

// Coffee Images
import Coffee01 from '../Images/Coffee01.png'
import Coffee02 from '../Images/Coffee02.png'

// Custom Component

import Header from '../Component/Header'
import Footer from '../Component/Footer'



//  Component

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//  Router
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Supportus = () => {
  return (
    <>
        <Header/>
            <section className='py-5'>
                <Container className='d-flex '>
                    <Row className=' flex-column mx-0 justify-content-center'>
                        <Col md={10} >
                        <h1 className='text-start fw-800 mb-3'>Support The Rick and Morty API</h1>
                        <p className=' fs-5 fw-semibold '>Help to maintain The Rick and Morty API's infrastructure!</p>
                        <p>If you are using the API for your app, your online tutorials or your coding challenges, please consider supporting us to help keep the project alive.</p>
                        <p>We are not getting any money from this and we use our free time to keep the API running and the data up to date. Every contribution, however big or small, is super valuable for our future.</p>
                        <span>Thanks!</span>
                        </Col>
                        <Col md={2}>
                         <Row className='d-flex flex-row'>
                           <div className='overflow-hidden' >
                                <Link to="" className="w-25"><img src={Coffee01} alt="" /></Link>
                           </div> 
                           <div className='overflow-hidden'>    
                                <Link to="" className="w-25"><img src={Coffee02} alt="" /></Link>
                           </div> 
                         </Row>
                        </Col>
                    </Row>
                </Container>
                <Container fluid >hello</Container>
            </section>
        <Footer/>

    </>
  )
}

export default Supportus
