import { CreatePost } from "./components/CreatePost";
import Hero from "./components/Layout/Hero";
import { PostDetail } from "./components/PostDetail";
import { PostList } from "./components/PostList";

import { SearchProvider } from "./context/searchContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-slate-600 min-h-screen">
        <SearchProvider>
          <Hero />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="/crear-entrada" element={<CreatePost />} />
            <Route path="/editar/:postId" element={<CreatePost />} />
          </Routes>
        </SearchProvider>
      </div>
    </Router>
  );
}

export default App;
