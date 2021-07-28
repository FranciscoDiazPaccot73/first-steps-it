import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Jobs from './components/Jobs';
import Header from './components/Header';

const Routes = () =>
  <Router>
    <Header />
    <Switch>
    {/*<Route
      exact path='/about'
      component={About}
    />*/}
    <Route component={Jobs} />
    </Switch>
  </Router>

export default Routes;