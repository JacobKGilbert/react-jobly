import React, { useState, useEffect } from 'react'
import JoblyApi from './api'
import JobCard from './JobCard'
import SearchForm from './SearchForm'

const JobList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const getJobs = async () => {
    let comps = await JoblyApi.getAllJobs()
    setJobs(comps)
  }

  const filterJobs = async (searchFilters) => {
    setIsLoading(true)
    let comps = await JoblyApi.getAllJobs(searchFilters)
    setJobs(comps)
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
    <div>
      <SearchForm filter={filterJobs} searchType='jobs'/>
      {jobs.map(j => (
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

export default JobList