import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-bootstrap-icons'

export const Footer = () => {
  return (
    <>
    <Container className="bg-light m-0 p-3" fluid>
        <Row>
            <Col md={3}>
                <h6>About Company</h6>
                <ul>
                  <li ><a href="" as={Link}>About Blossom  </a></li>  
                  <li> <a href='#contact'> Contact us </a></li>  
                  <li> <a href='#'> Career </a></li>  
                  <li> <a href='#'> FAQs </a></li>  
                </ul> 
            </Col>
            <Col md={3}>
                <h6>Terms & policies</h6>
                <ul>
                  <li ><a href="">Terms & conditions </a></li>  
                  <li> <a href='#'> Privacy policies </a></li>  
                  <li> <a href='#'> Refund & Cancellation </a></li>  
                  <li> <a href='#'> Shiping details </a></li>  
                </ul> 
            </Col>
            <Col md={3}>
                <h6>Services</h6>
                <ul>
                  <li ><a href="">Online flower delivery</a></li>  
                  <li> <a href='#'>Midnight flower delivery</a></li>  
                  <li> <a href='#'>Sameday flower delivery </a></li>  
                  <li> <a href='#'> Surpise gifts </a></li>  
                </ul> 
            </Col>
            <Col md={3}>
                <h6>Social</h6>
                <ul>
                  <li ><a href="">Online flower delivery</a></li>  
                  <li> <a href='#'>Midnight flower delivery</a></li>  
                  <li> <a href='#'>Sameday flower delivery </a></li>  
                  <li> <a href='#'> Surpise gifts </a></li>  
                </ul> 
            </Col>
        </Row>
    </Container>
    </>
  )
}
