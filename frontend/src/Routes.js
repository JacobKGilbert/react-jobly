import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import CompanyList from './CompanyList'
import CompanyDetail from './CompanyDetail'
import Jobs from './Jobs'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Profile from './Profile'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/companies'>
        <CompanyList/>
      </Route>
      <Route exact path='/companies/:handle'>
        <CompanyDetail/>
      </Route>
      <Route exact path='/jobs'>
        <Jobs/>
      </Route>
      <Route exact path='/login'>
        <LoginForm/>
      </Route>
      <Route exact path='/signup'>
        <SignUpForm/>
      </Route>
      <Route exact path='/profile'>
        <Profile/>
      </Route>
    </Switch>
  )
}

export default Routes