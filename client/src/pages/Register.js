import React from 'react'
import {Button, Form , Input} from 'antd';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
    <div className="register-page">
        < Form layout = "vertical">
            <h1>Register Form</h1>
            <Form.Item label ="Name" name="name">
                <Input/>
            </Form.Item>
            <Form.Item label ="Email" name="email">
                <Input type="email"/>
            </Form.Item>
            <Form.Item label ="Password" name="password">
                <Input type="password"/>
            </Form.Item>
            <div className='d-flex' style={{flexDirection: 'column'}}>
            <Link>Already Registered ? Click here to login</Link>
            <Button className='btn btn-primary' size="small">Register</Button>
            </div>
        </Form>
        
    </div>
    </>
  )
}

export default Register;
