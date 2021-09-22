import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JoblyApi from './api'
import JobCard from './JobCard'
import './css/CompanyDetail.css'

const CompanyDetail = () => {
  const { handle } = useParams()
  const INITIAL_STATE = {}
  const [company, setCompany] = useState(INITIAL_STATE)

  const getCompany = async (handle) => {
    const comp = await JoblyApi.getCompany(handle)
    console.log(comp)
    setCompany(comp)
  }

  useEffect(() => {
    getCompany(handle)
  }, [handle])

  if (company === INITIAL_STATE) {
    return <h2>Loading...</h2>
  }
  
  return (
    <div className='CompanyDetail col-md-8 offset-md-2'>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      {company.jobs.map(j => (
        <JobCard
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
        />
      ))}
    </div>
  )
}

export default CompanyDetail