import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Thanks from './Thanks';
import About from './About';
import './App.scss';

function App() {
  return (
    <div className="layout">
      <Router>
        <header className="header">

        </header>

        <div className='main'>
          <Switch>
            <Route path='/thanks/:recipient'>
              <Thanks />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>

        <footer className='footer'>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Thank someone</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </footer>
      </Router>
    </div>
  );
}

export default App;
