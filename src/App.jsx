import "./App.css";
import HomePage from "./home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProfileSelection from "./components/ProfileSelection/ProfileSelection";

function App() {
  return (
    <Router>
      <Route
        path="/"
        render={({ location }) =>
          location.pathname !== "/" ? <Header /> : null
        }
      />
      <Switch>
        <Route exact path="/" component={ProfileSelection} />
        <Route path="/home" component={HomePage} />
        <Route
          path="/singlepage/:id"
          render={(props) => (
            <SinglePage key={props.match.params.id} {...props} />
          )}
        />
      </Switch>
      <Route
        path="/"
        render={({ location }) =>
          location.pathname !== "/" ? <Footer /> : null
        }
      />
    </Router>
  );
}

export default App;
