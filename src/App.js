import { BrowserRouter as Router, Switch } from "react-router-dom";

import Nav from "./components/nav/nav.components";
import Home from "./pages/homepage/home.component";
import Blog from "./pages/blog/blog.component";
import Footer from "./components/footer/footer.component";

import "./App.css"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Home path='/' exact />
        <Blog path='/posts' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
