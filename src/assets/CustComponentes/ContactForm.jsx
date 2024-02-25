import { useState } from 'react';
import { Envelope, Person, Send } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} id='contact' autoComplete='off'>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" className='mx-auto' controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="name"><Person color="#E85A4F" /> </InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Name"
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Please enter your name.
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" className='mx-auto' controlId="validationCustom02" >
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="email"><Envelope color="#E85A4F" /> </InputGroup.Text>
                <Form.Control
                type="email"
                placeholder="sample@gmail.com"
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Please enter avalid email.
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="4" className='mx-auto' controlId="validation">
                <Form.Label>Enter your message</Form.Label>

                <Form.Control as="textarea" aria-label="With textarea" placeholder='Your message here...' required/>            
                <Form.Control.Feedback type="invalid">
                Don't hesitate!
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} md="4" className='mx-auto'>
                <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"              
                />
            </Form.Group>
        </Row>
        <Row>
            <Col sm="2" className='mx-auto'>
            <Button variant="info" type="submit" className='mx-auto mt-3 text-light shadow px-5'><Send /> Send</Button>
            </Col>
        </Row>
    </Form>
  );
}

export default ContactForm;