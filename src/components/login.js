import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from '@chakra-ui/react'

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Link className="link">Forgot your email?</Link>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link className="forgotLink">Forgot your password?</Link>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Link className="link">Or sign up here.</Link>
    </Form>
  );
}

export default LoginForm;