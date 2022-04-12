import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components and pages
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Beer from './pages/beer/Beer'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
          <Route path="/signup">
            <Signup />
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
