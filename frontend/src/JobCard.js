import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, Button } from 'reactstrap'
import JoblyApi from './api'

const JobCard = ({ id, title, salary, equity }) => {

  const showSalary = () => {
    if (salary) {
      return <CardSubtitle>Salary: ${salary}</CardSubtitle>
    }
    return <CardSubtitle>Salary not listed.</CardSubtitle>
  }

  const showEquity = () => {
    if (equity > 0) {
      return <CardSubtitle>Equity: {equity}</CardSubtitle>
    }
    return <CardSubtitle>Equity not listed.</CardSubtitle>
  }

  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        {showSalary()}
        {showEquity()}
        <Button color='danger'>Apply</Button>
      </CardBody>
    </Card>
  )
}

export default JobCard