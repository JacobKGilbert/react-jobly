import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interacting with the API will be stored here.
  static token

  static async request(endpoint, data = {}, method = 'get') {
    console.debug('API Call:', endpoint, data, method)

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`
    const headers = { Authorization: `Bearer ${JoblyApi.token}` }
    const params = method === 'get' ? data : {}

    try {
      return (await axios({ url, method, data, params, headers })).data
    } catch (err) {
      console.error('API Error:', err.response)
      let message = err.response.data.error.message
      throw Array.isArray(message) ? message : [message]
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`)
    return res.company
  }

  /** Get all companies (or companies matching filter data) */

  static async getAllCompanies(data) {
    let res = await this.request(`companies/`, data)
    return res.companies
  }

  /** Get all jobs (or jobs matching filter data) */

  static async getAllJobs(data) {
    let res = await this.request(`jobs/`, data)
    return res.jobs
  }

  static async loginUser(data) {
    let res = await this.request('auth/token', data, 'post')
    JoblyApi.token = res.token
    return JoblyApi.token
  }

  static async signupUser(data) {
    let res = await this.request('auth/register', data, 'post')
    JoblyApi.token = res.token
    return JoblyApi.token
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`)
    return res.user
  }

  static async updateUser(data) {
    const username = data.username
    delete data.username
    let res = await this.request(`users/${username}`, data, 'patch')
    return res.user
  }

  static async apply(username, jobId) {
    const data = {}
    let res = await this.request(`users/${username}/jobs/${jobId}`, data, 'post')
    return res.applied
  }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi