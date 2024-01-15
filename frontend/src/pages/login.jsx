import React, { useContext } from 'react';
import { Alert,Button,Form,Row,Col,Stack } from 'react-bootstrap';
import { Authcontext } from '../context/Authcontext';
const Login = () => {

  const {logoutUser,
    loginUser,
    loginError,
    loginInfo,
    updateLoginInfo,
    isLoginLoading}=useContext(Authcontext);

  return (<>
  <Form>
    <Row
    style={{
      height:"100vh",
      justifyContent:'center',
      paddingTop:"10%"
    }}
    >
      <Col xs={6}>
      <Stack gap={3}>
            <h2 className="mx-auto">Login</h2>
            <Form.Control type='email' placeholder='Email' onChange={(e)=>updateLoginInfo
            ({...loginInfo,email:e.target.value})}/>
            <Form.Control type='password' placeholder='Password' onChange={(e)=>updateLoginInf
            ({...loginInfo,password:e.target.value})}/>
            <Button varient="primary" type='submit' style={{width:"10rem"}}className="mx-auto">
              Login
            </Button>
            <Alert variant='danger'><p>an error ocure</p></Alert>
      </Stack>
      </Col>
    </Row>
  </Form>
  </>);
}

export default Login;
