import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateNote from './CreateNote'
import Header from './Header'
import Home from './Home'
import Read from './Read'
import './index.css'
import NotFound from './NotFound'


function App() {
  
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/create'>
            <CreateNote />
          </Route>
          <Route path='/notes/:id'>
            <Read />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
