import React from "react";
import { useNavigate } from "react-router-dom";

export default function DeletePost() {
  let navigate = useNavigate();

  const deletePost = (e) => {
    e.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    let formData = JSON.stringify({
      body: e.target.body.value,
    });

    fetch(
      `https://kekambas-blog.herokuapp.com/blog/posts/${e.target.postID.value}`,
      {
        method: "DELETE",
        headers: myHeaders,
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
        } else {
          navigate("/");
        }
      });
  };

  return (
    <div>
      <form onSubmit={deletePost}>
        <h3>Delete Post</h3>
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
            value="Delete Post"
          />
        </div>
      </form>
    </div>
  );
}
