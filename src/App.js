import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Thanks from './Thanks';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">

        </header>

        <div className='main'>
          <Switch>
            <Route path={['/thanks', '/thx', '/thanks/:recipient', '/thx/:recipient']}>
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

        <footer>
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
