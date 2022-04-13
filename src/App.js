import './App.css'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// components and pages
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Beer from './pages/beer/Beer'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              {!user && <Redirect to="/" />}
              {user && <Create />}
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/login">
              {!user &&  <Login />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/signup">
              {!user &&<Signup />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/beers/:id">
              <Beer />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
