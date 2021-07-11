import Nav from "./components/nav/nav.components";
import BlogContainer from "./components/blog-container/blog-container.component";
import PostItem from "./components/post-item/post-item.component";

function App() {
  return (
    <div className='App'>
      <Nav />
      <BlogContainer />
      <PostItem />
    </div>
  );
}

export default App;
