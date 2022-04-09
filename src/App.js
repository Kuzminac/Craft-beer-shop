import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Beer from './pages/beer/Beer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/beers/:id">
            <Beer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
