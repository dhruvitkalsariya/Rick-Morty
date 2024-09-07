import React from 'react'

//  custom component
import { Container } from 'react-bootstrap'

//  Routing 
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Edit = () => {
    return (
        <>
            <Container fluid className=' py-3  d-flex border-top justify-content-end'>
                <div className="mx-4 fs-6">
                    <Link to="/" >edit this page</Link>
                </div>
            </Container>
        </>
    )
}

export default Edit
