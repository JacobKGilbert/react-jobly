import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, Button, CardText } from 'reactstrap'
import JoblyApi from './api'
import './css/JobCard.css'

const JobCard = ({ id, title, salary, equity, company }) => {

  const showCompany = () => {
    if (company) {
      return <CardSubtitle>{company}</CardSubtitle>
    }
  }

  const showSalary = () => {
    if (salary) {
      return <CardText><small>Salary: ${salary}</small></CardText>
    }
    return (
      <CardText>
        <small>Salary not listed.</small>
      </CardText>
    )
  }

  const showEquity = () => {
    if (equity > 0) {
      return <CardText><small>Equity: {equity}</small></CardText>
    }
    return <CardText><small>Equity not listed.</small></CardText>
  }

  return (
    <div className="JobCard">
      <Card>
        <div className="row no-gutters">
          <div className="col-md-8">
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              {showCompany()}
              <p></p>
              <CardSubtitle tag='h6'>Benefits</CardSubtitle>
              {showSalary()}
              {showEquity()}
            </CardBody>
          </div>
          <div className="col-md-4">
            <CardBody>
              <Button
                color="danger"
                className="position-absolute bottom-0 end-0 m-3"
              >
                Apply
              </Button>
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default JobCard