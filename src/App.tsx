import Hero from "./components/Layout/Hero";
import { PostList } from "./components/PostList";
import SingleElement from "./components/PostDetail";
import { CreatePost } from "./components/CreatePost";

function App() {
  return (
    <div className="bg-slate-600">
      <Hero />
      <PostList></PostList>
      <CreatePost />
    </div>
  );
}

export default App;
