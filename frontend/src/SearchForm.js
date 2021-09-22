import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Form, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';

const SearchForm = ({ filter, searchType }) => {
  const [formData, setFormData] = useState({})
  const INITIAL_STATE = useRef()
  let inputRef = useRef()

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

  const selectInput = useCallback(() => {
    if (searchType === 'companies') {
      INITIAL_STATE.current = {
        name: '',
      }
      setFormData(INITIAL_STATE.current)
      inputRef.current = (
        <Input
          type="text"
          name="name"
          placeholder="Filter By Name"
          onChange={handleChange}
        />
      )
      
    } else if (searchType === 'jobs') {
      INITIAL_STATE.current = {
        title: '',
      }
      setFormData(INITIAL_STATE.current)
      inputRef.current = (
        <Input
          type="text"
          name="title"
          placeholder="Filter By Title"
          onChange={handleChange}
        />
      )
    }
  }, [searchType])

  useEffect(() => {
    selectInput()
  }, [selectInput])

  return (
    <Form onSubmit={handleSubmit} className='mb-4'>
      <InputGroup>
        {inputRef.current}
        <InputGroupAddon addonType="append">
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  )
}

export default SearchForm