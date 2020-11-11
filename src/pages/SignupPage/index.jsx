import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import FormElement from '../../components/FormElement';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import './sign-up-page.scss';
import { useForm } from 'react-hook-form';

function SignupPage() {
  const schema = yup.object().shape({
    name: yup.string()
      .required('Please enter ur name!'),
    email: yup.string()
      .required('Please enter ur email!')
      .email('Email is not valid!'),
    password: yup.string()
      .required('Please enter ur password!'),
    confirmPassword: yup.string()
      .required('Please confirm your pasword!')
      .oneOf([yup.ref('password')], 'Comfirm password not match!'),
  });
  const { handleSubmit, errors, register } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = ({ name, email, password }) => {
    console.log({ name, email, password });
  }

  return (
    <Container className="sign-up-page mt-5">
      <Row>
        <Col xs={12} md={8}>
          <Form
            onSubmit={handleSubmit(handleSignUp)}
            className="sign-up-page__form p-5"
          >
            <p className="text-center font-weight-bold">Get started with React-Admin-Dashboard!</p>
            <FormElement
              name="name"
              label="Your name:"
              type="text"
              placeholder="Enter your name here!"
              innerRef={register}
              errorMessage={errors.name?.message}
            />
            <FormElement
              name="email"
              label="Email:"
              type="text"
              placeholder="Enter your email here!"
              detail="Your email is used for login!"
              innerRef={register}
              errorMessage={errors.email?.message}
            />
            <FormElement
              name="password"
              label="Password:"
              type="password"
              placeholder="Enter your password here!"
              innerRef={register}
              errorMessage={errors.password?.message}
            />
            <FormElement
              name="confirmPassword"
              label="Re-enter password:"
              type="password"
              placeholder="Confirm your password here!"
              innerRef={register}
              errorMessage={errors.confirmPassword?.message}
            />
            <Button type="submit" variant="primary" block>Sign Up</Button>
          </Form>
        </Col>
        <Col md={4}>

        </Col>
      </Row>
    </Container>
  )
}

export default SignupPage;