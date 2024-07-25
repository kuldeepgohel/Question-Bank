import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import Home from "./Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import CreatePost from './Pages/CreatePost/CreatePost'
import SinglePost from "./Pages/SinglePage/SinglePost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/singlepost/:postID"  element={<SinglePost />} />
        <Route path="/updatepost/:postID"  element={<CreatePost />} />
      </Routes>
    </>
  );

  
}

export default App;