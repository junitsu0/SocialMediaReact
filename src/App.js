import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import GetAllPosts from "./components/AllPosts";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/EditPost";
import DeletePost from "./components/DeletePost";

export default function App(props) {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    setLoggedIn(false);
  };
  const login = () => {
    setLoggedIn(true);
  };
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") &&
      new Date(localStorage.getItem("expiration"))
      ? true
      : false
  );

  return (
    <>
      <Navbar logout={logout} loggedIn={loggedIn} />
      {loggedIn ? <h1>You are logged in </h1> : <h1>You are logged out</h1>}
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} login={login} />
      </Routes>
      <Routes>
        <Route path="/all-posts" element={<GetAllPosts />} />
      </Routes>
      <Routes>
        <Route path="/" element={<SinglePost />} />
      </Routes>
      <Routes>
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Routes>
        <Route path="/update-post" element={<UpdatePost />} />
      </Routes>
      <Routes>
        <Route path="/delete-post" element={<DeletePost />} />
      </Routes>
    </>
  );
}
