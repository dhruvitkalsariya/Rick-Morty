import React from "react";

//  Component
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

//  Router
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const Card = (props) => {
  return (
    <Col md={6} className="mx-0 p-2 d-flex flex-row ">
    <Col md={5} className="col-5 p-0 rounded-start-3 overflow-hidden">
      <img src={props.image} width={"100%"} alt={props.name}/>
    </Col>
    <Col md={7} id="Character_Card" className="rounded-end-3 d-flex flex-column justify-content-between p-3 text-white fw-fw-semibold ">
      <div className="Name">
        <Link to="/" className="text-white ">
          <h4 className="mb-0" style={{fontWeight:"900"}}>{props.name}</h4>
        </Link>
        <span id={props.color} className="fw-medium fs-6">
          {props.type}
        </span>
      </div>
      <div className="Last">
        <p className="gray mb-0">Last known location:</p>
        <span><Link to="/" className="text-white">{props.last}</Link></span>
      </div>
      <div className="First">
        <p className="gray mb-0">First seen in:</p>
        <span><Link to="/" className="text-white">{props.first}</Link></span>
      </div>
    </Col>
  </Col>
  );
};

export default Card;
