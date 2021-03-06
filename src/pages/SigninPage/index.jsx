import React from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import FormElement from '../../components/FormElement';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userSigninAction } from '../../actions/user.action';
import { useHistory } from 'react-router-dom';
import AuthMenu from '../../components/AuthMenu';

import './sign-in-page.scss';

function SigninPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, errorMessage, successMessage } = useSelector(state => state.user);

  const schema = yup.object().shape({
    email: yup.string()
      .required('Please enter ur email!')
      .email('Email is not valid!'),
    password: yup.string()
      .required('Please enter ur password!'),
  });
  const { handleSubmit, errors, register } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = ({ email, password }) => {
    dispatch(userSigninAction(email, password, history.push));
  }

  return (
    <>
      <AuthMenu
        btnContent="Sign up"
        title="Do not have account?"
        path="/auth/sign-up"
      />
      <Container className="sign-in-page mt-5">
        <Row>
          <Col xs={12} md={8}>
            <Form
              onSubmit={handleSubmit(handleSignIn)}
              className="sign-in-page__form p-5"
            >
              <p className="text-center font-weight-bold">Get started with React-Admin-Dashboard!</p>
              {
                errorMessage && <Alert variant="danger">{errorMessage}</Alert>
              }
              {
                successMessage && <Alert variant="success">{successMessage}</Alert>
              }
              <FormElement
                name="email"
                label="Email:"
                type="text"
                placeholder="Enter your email here!"
                innerRef={register}
                errorMessage={errors.email?.message}
                value="dacchi6761@gmail.com"
              />
              <FormElement
                name="password"
                label="Password:"
                type="password"
                placeholder="Enter your password here!"
                innerRef={register}
                errorMessage={errors.password?.message}
                value="123"
              />
              <Button
                type="submit"
                variant={isLoading ? 'dark' : 'primary'}
                block
                disabled={isLoading}
              >
                Sign In
            </Button>
            </Form>
          </Col>
          <Col md={4}>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SigninPage;