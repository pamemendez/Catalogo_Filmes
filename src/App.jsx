import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            path='/singlepage/:id'
            render={(props) => <SinglePage key={props.match.params.id} {...props} />}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App