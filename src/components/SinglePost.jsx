import { useState } from "react";

export default function SinglePost() {
  const [post, setPost] = useState({
    author: {
      date_created: "",
      email: "",
      id: 0,
      username: "",
    },
    content: "",
    date_created: "",
    id: 0,
    title: "",
  });

  const getPost = async (e) => {
    e.preventDefault();

    let postId = e.target.postId.value;

    try {
      console.log("hello");
      const response = await fetch(
        `https://kekambas-blog.herokuapp.com/blog/posts/${postId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setPost(result);
    } catch (error) {
      console.log("hello");
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={getPost}>
        <div className="form-group">
          <label htmlFor="postId">Post ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Post ID"
            name="postId"
          />

          <input
            type="submit"
            className="btn btn-primary w-100 mt-3"
            value="Get Post"
          />
        </div>
      </form>

      <div
        style={{
          minHeight: "400px",
          display: "inline-block",
          padding: "5px",
        }}
      >
        <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: "#ffd580",
            minHeight: "300px",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{post.date_created}</li>
          </ul>
          <div
            className="card-body"
            style={{
              backgroundColor: "lightgray",
            }}
          >
            <p>{post.author.username}</p>
            <p>{post.author.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
