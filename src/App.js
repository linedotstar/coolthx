import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Thanks from './pages/Thanks';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';

function App() {
  return (
    <div className="layout">
      <Router>
        <ScrollToTop />
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
                Cool Thx
              </li>
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
