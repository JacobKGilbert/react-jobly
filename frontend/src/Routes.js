import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import CompanyList from './CompanyList'
import CompanyDetail from './CompanyDetail'
import JobList from './JobList'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Profile from './Profile'
import UserContext from './UserContext'

const Routes = ({ functions }) => {
  const { signup, login } = functions
  const { currUser } = useContext(UserContext)

  const redirectIfNoUser = () => {
    if (!currUser) {
      return <Redirect to='/login'/>
    }
  }

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      <Route exact path="/signup">
        <SignUpForm signup={signup} />
      </Route>
      {redirectIfNoUser()}
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  )
}

export default Routes