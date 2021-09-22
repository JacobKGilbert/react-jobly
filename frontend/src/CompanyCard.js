import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import './css/CompanyCard.css'

const CompanyCard = ({ handle, name, description, logo }) => {
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`} className="text-decoration-none text-body">
        <Card>
          <div className="row no-gutters">
            <div className="col-md-10">
              <CardBody>
                <CardTitle className="text-start fw-bold">{name}</CardTitle>
                <CardText className="text-start">{description}</CardText>
              </CardBody>
            </div>
            <div className="col-md-2">
              <CardBody>
                <CardImg src={logo} alt={`Logo for ${name}`} />
              </CardBody>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default CompanyCard