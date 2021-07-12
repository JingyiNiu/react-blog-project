import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav/nav.components";
import Home from "./pages/homepage/home.component";
import Blog from "./pages/blog/blog.component";
import Footer from "./components/footer/footer.component";
import PostItem from "./components/post-item/post-item.component";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/posts' exact component={Blog} />
        <Route path='/posts/:id' component={PostItem} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
