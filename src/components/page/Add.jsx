import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {FaSearch} from "react-icons/fa"

export const Add = () => {
  return (
    <>
      <div className="">
        <Button size="lg" >Add</Button>{" "}
        <Row>
          <Col>
            <Form.Floating className="mb-5">
              <Form.Control id="Vehicle" type="text" placeholder="" />
              <label htmlFor="Vehicle">Vehicle registration</label>
            </Form.Floating>
          </Col>
          <Col>
            <Form.Floating className="">
              <Form.Control id="Transport" type="text" placeholder="" />
              <label htmlFor="Transport">Transport round</label>
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Floating className="">
              <Form.Control id="Location" type="text" placeholder="" />
              <label htmlFor="Location">Location</label>
            </Form.Floating>
          </Col>
          <Col>
            <Form.Floating className="">
              <Form.Control id="Weight" type="text" placeholder="" />
              <label htmlFor="Weight">Weight/round</label>
            </Form.Floating>
          </Col>
        </Row>
      </div>

      <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input placeholder="find...."/>
      </div>
    </>
  );
};

export default Add;
