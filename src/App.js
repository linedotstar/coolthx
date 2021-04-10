import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Thanks from './Thanks';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Router>
        <Switch>
          <Route path='/thanks/:recipient'>
            <Thanks />
          </Route>

          <Route path='/'>
            <Thank />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Thank(props) {
  return <p>Thank someone</p>;
}

export default App;
