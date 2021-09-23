import React, { useContext, useState } from 'react'
import { Form, Label, Input, Button, Alert } from 'reactstrap'
import UserContext from './UserContext'
import JoblyApi from './api'

const Profile = () => {
  const { currUser, setCurrUser } = useContext(UserContext)
  const INITIAL_STATE = {
    username: `${currUser.username}`,
    password: '',
    firstName: `${currUser.firstName}`,
    lastName: `${currUser.lastName}`,
    email: `${currUser.email}`,
  }
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [updated, setUpdated] = useState(false)

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }))
  }

  const updateUser = async (data) => {
    try {
      const user = await JoblyApi.updateUser(data)
      if (user) {
        setUpdated(true)
        setCurrUser(user)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    INITIAL_STATE.password = ''
    updateUser({ ...formData })
  }

  return (
    <div class="col-md-4 position-absolute top-50 start-50 translate-middle">
      <h3>Profile</h3>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          readOnly
        />

        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="row mt-2">
          <div className="col-md-4">
            <Button color="primary" className="pb-2">
              Save Changes
            </Button>
          </div>
          <div className="col-md-8">
            {updated ? (
              <Alert color="success" className="mb-0 p-2">
                Updated Successfully
              </Alert>
            ) : null}
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Profile