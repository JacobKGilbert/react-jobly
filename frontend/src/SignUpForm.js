import React, { useState } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'

const SignUpForm = ({ signup }) => {
  const INITIAL_STATE = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
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
    signup({ ...formData })
    setFormData(INITIAL_STATE)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="username">Username</Label>
      <Input
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
      />
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <Label htmlFor="firstName">First Name</Label>
      <Input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
      />
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
      />
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
      />
      <Button color="primary">Sign Up</Button>
    </Form>
  )

}

export default SignUpForm