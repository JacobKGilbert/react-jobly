import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Input, Label } from 'reactstrap';

const LoginForm = ({ login }) => {
  const INITIAL_STATE = {
    username: '',
    password: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    login({ ...formData })
    setFormData(INITIAL_STATE)
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Label htmlFor='username'>Username</Label>
      <Input 
        type='text' 
        id='username' 
        name='username' 
        onChange={handleChange} 
      />
      <Label htmlFor='password'>Password</Label>
      <Input 
        type='password' 
        id='password' 
        name='password' 
        onChange={handleChange} 
      />
      <Button color='primary'>Log In</Button>
      <p>Not already a user?</p>
      <Link to='/signup'><Button outline color='secondary'>Sign Up</Button></Link>
    </Form>
  )
}

export default LoginForm