import React, { useState, useEffect } from 'react'
import JoblyApi from './api'
import JobCard from './JobCard'
import SearchForm from './SearchForm'
import './css/JobList.css'

const JobList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const getJobs = async () => {
    let allJobs = await JoblyApi.getAllJobs()
    setJobs(allJobs)
  }

  const filterJobs = async (searchFilters) => {
    setIsLoading(true)
    let filteredJobs = await JoblyApi.getAllJobs(searchFilters)
    setJobs(filteredJobs)
    setIsLoading(false)
  }

  useEffect(() => {
    getJobs()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='JobList'>
      <SearchForm filter={filterJobs} searchType='jobs'/>
      {jobs.map(j => (
        <JobCard
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
          company={j.companyName}
        />
      ))}
    </div>
  )
}

export default JobList