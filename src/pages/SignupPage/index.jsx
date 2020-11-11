import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import FormElement from '../../components/FormElement';

import './sign-up-page.scss';

function SignupPage() {
  return (
    <Container className="sign-up-page mt-5">
      <Row>
        <Col xs={12} md={8}>
          <Form className="sign-up-page__form p-5">
            <p className="text-center font-weight-bold">Get started with React-Admin-Dashboard!</p>
            <FormElement
              name="name"
              label="Your name:"
              type="text"
              placeholder="Enter your name here!"
            />
            <FormElement
              name="email"
              label="Email:"
              type="text"
              placeholder="Enter your email here!"
              detail="Your email is used for login!"
            />
            <FormElement
              name="password"
              label="Password:"
              type="password"
              placeholder="Enter your password here!"
            />
            <FormElement
              name="confirmPassword"
              label="Re-enter password:"
              type="password"
              placeholder="Confirm your password here!"
            />
            <Button variant="primary" block>Sign Up</Button>
          </Form>
        </Col>
        <Col md={4}>

        </Col>
      </Row>
    </Container>
  )
}

export default SignupPage;