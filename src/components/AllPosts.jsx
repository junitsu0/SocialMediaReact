import { useEffect, useState } from "react";

export default function GetAllPosts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      console.log("hello");
      const response = await fetch(
        "https://kekambas-blog.herokuapp.com/blog/posts",
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
      setPosts(result);
    } catch (error) {
      console.log("hello");
      console.log(error);
    }
  };

  return (
    <div>
      {posts.map((post) => {
        return (
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
        );
      })}
      <button onClick={getPosts}>Fetch data</button>
    </div>
  );
}
