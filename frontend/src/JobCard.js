import React, { useContext, useEffect, useState } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, Button, CardText } from 'reactstrap'
import JoblyApi from './api'
import './css/JobCard.css'
import UserContext from './UserContext'

const JobCard = ({ id, title, salary, equity, company }) => {
  const { currUser, setCurrUser } = useContext(UserContext)
  const [applied, setApplied] = useState(false)

  useEffect(() => {
    if (currUser.applications.includes(id)) {
      setApplied(true)
    }
  }, [currUser.applications, id])
  
  const apply = async () => {
    try {
      const app = await JoblyApi.apply(currUser.username, id)
      if (app) {
        setCurrUser({...currUser, applications: [...currUser.applications, id]})
        setApplied(true)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const applicationBtn = () => {
    if (applied) {
      return (
        <Button
          color="success"
          className="position-absolute bottom-0 end-0 m-3"
          disabled
        >
          Applied
        </Button>
      )
    }
    return (
      <Button 
        color="danger" 
        className="position-absolute bottom-0 end-0 m-3"
        onClick={apply}
      >
        Apply
      </Button>
    )
  }

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
              {applicationBtn()}
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default JobCard