import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Facebook,
  Globe,
  Instagram,
  Link,
  Whatsapp,
} from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <>
      <Container className="bg-light m-0 p-3" id="footer" fluid>
        <Row>
          <Col md={3}>
            <h6>About Company</h6>
            <ul>
              <li>
                <a href="" as={Link}>
                  About Blossom
                </a>
              </li>
              <li>
                <a href="#contact"> Contact us </a>
              </li>
              <li>
                <a href="#"> Career </a>
              </li>
              <li>
                <a href="#"> FAQs </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Terms & policies</h6>
            <ul>
              <li>
                <a href="">Terms & conditions </a>
              </li>
              <li>
                <a href="#"> Privacy policies </a>
              </li>
              <li>
                <a href="#"> Refund & Cancellation </a>
              </li>
              <li>
                <a href="#"> Shiping details </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Services</h6>
            <ul>
              <li>
                <a href="">Online flower delivery</a>
              </li>
              <li>
                <a href="#">Midnight flower delivery</a>
              </li>
              <li>
                <a href="#">Sameday flower delivery </a>
              </li>
              <li>
                <a href="#"> Surpise gifts </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Social</h6>
            <ul>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <Instagram color="hotpink" fontSize={20} /> Instagram{" "}
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <Facebook color="dodgerblue" fontSize={20} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/+918667286277/" target="_blank">
                  <Whatsapp color="green" fontSize={20} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <Globe fontSize={20} /> Official Website
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
