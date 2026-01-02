import Header from "./components/Header/Header";
import PostsIndex from "./components/PostsList/PostsIndexIndex";
import PostsDetail from "./components/PostsList/PostsDetail";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PostsIndex />} />
        <Route path="/posts/:id" element={<PostsDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App