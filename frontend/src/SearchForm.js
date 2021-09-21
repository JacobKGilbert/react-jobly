import React, { useState } from 'react'
import { Form, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';

const SearchForm = ({ filter }) => {
  const INITIAL_STATE = {
    query: ''
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
    filter({ ...formData })
    setFormData(INITIAL_STATE)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Filter By Name"
          onChange={handleChange}
        />
        <InputGroupAddon addonType="append">
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  )
}

export default SearchForm