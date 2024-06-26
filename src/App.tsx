import Hero from "./components/Layout/Hero";
import { PostList } from "./components/PostList";
import SingleElement from "./components/PostDetail";

function App() {
  return (
    <div className="bg-slate-600">
      <Hero />
      <PostList></PostList>
    </div>
  );
}

export default App;
