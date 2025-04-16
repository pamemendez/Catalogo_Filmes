import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ProfileSelection from "./pages/ProfileSelection"

function App() {
  return (
    <>
      <Router>
        {/* Mostrar Header e Footer apenas fora da seleção de perfil */}
        <Route path="/select-profile" exact component={ProfileSelection} />
        <Route
          path="/"
          render={() => (
            <>
              <Header />
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/singlepage/:id' component={SinglePage} />
              </Switch>
              <Footer />
            </>
          )}
        />
      </Router>
    </>
  )
}

export default App
