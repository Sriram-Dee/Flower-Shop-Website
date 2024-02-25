import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

export const Track = () => {
  return (
    <>
      <section id="track">
        <h3 className="text-center py-5">Tracking your order is simple!</h3>
        <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
          <Row className="px-3">
            <Form.Group
              as={Col}
              md="4"
              className="mx-auto"
              controlId="validationCustom01"
            >
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Eg: #A01230BZ7"
                  aria-describedby="basic-addon2"
                />

                <Button
                  variant="info"
                  type="submit"
                  className="mx-auto text-light shadow"
                >
                  <Search /> Track
                </Button>
              </InputGroup>
            </Form.Group>
          </Row>
        </form>

        <h2 className="h1 mt-5 text-center text-primary">How it Works?</h2>
        <Row className="track-steps p-5 text-center" gap={5}>
          <Col>
            <img src="icon-sell.svg" />
            <h4 className="px-md-5 py-3">1. Place Your Order</h4>
          </Col>
          <Col>
            <img src="icon-parcel-pickup.svg" />
            <h4 className="px-md-5 py-3">
              2. your shipment is prepared and picked
            </h4>
          </Col>
          <Col>
            <img src="icon-deliver.svg" />
            <h4 className="px-md-5 py-3">3. We bring your shipment to you!</h4>
          </Col>
        </Row>
      </section>
    </>
  );
};
