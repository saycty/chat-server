import React from 'react';
import { useContext } from 'react';
import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { Authcontext } from '../context/Authcontext';

const Register = () => {
  const { registerInfo, updateregisterInfo, registerUser, registerError ,isRegisterLoading} = useContext(Authcontext);
  return (
    <>
      <Form onSubmit={registerUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: 'center',
            paddingTop: "10%"
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2 className="mx-auto">Register</h2>
              <Form.Control type='text' placeholder='Name'
                onChange={(e) => updateregisterInfo(
                  { ...registerInfo, name: e.target.value }
                )}
              />
              <Form.Control type='email' placeholder='Email'
                onChange={(e) => updateregisterInfo(
                  { ...registerInfo, email: e.target.value }
                )}
              />
              <Form.Control type='password' placeholder='Password'
                onChange={(e) => updateregisterInfo(
                  { ...registerInfo, password: e.target.value }
                )}
              />
              <Button variant="primary" type='submit' style={{ width: "10rem" }} className="mx-auto">
                {isRegisterLoading?"creating your account":"register"}
              </Button>
              {registerError?.error && <Alert variant='danger'><p>{registerError?.message}</p></Alert>}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Register;
