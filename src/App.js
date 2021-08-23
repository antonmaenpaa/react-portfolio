import Header from "./components/Header";
import {Route, Switch} from "react-router";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/projects">
          <Projects/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
   

    </>
  );
}

export default App;
