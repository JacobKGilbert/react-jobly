import React, { useState, useEffect } from 'react'
import JoblyApi from './api'
import SearchForm from './SearchForm'
import CompanyCard from './CompanyCard'
import './css/CompanyList.css'

const CompanyList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [companies, setCompanies] = useState([])

  const getCompanies = async () => {
    let comps = await JoblyApi.getAllCompanies()
    setCompanies(comps)
  }

  const filterCompanies = async (q) => {
    let comps = await JoblyApi.getAllCompanies(q)
    setCompanies(comps)
  }

  useEffect(() => {
    getCompanies()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='CompanyList'>
      <SearchForm filter={filterCompanies}/>
      {companies.map(c => (
        <CompanyCard 
          handle={c.handle}
          name={c.name}
          employees={c.num_employees}
          description={c.description}
          logo={c.logo_url} 
        />
      ))}
    </div>
  )
}

export default CompanyList