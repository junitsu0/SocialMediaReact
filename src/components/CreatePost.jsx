import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost(props) {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("token"));

    let formData = JSON.stringify({
      title: e.target.title.value,
      body: e.target.body.value,
    });

    fetch("https://kekambas-blog.herokuapp.com/blog/posts", {
      method: "POST",
      headers: myHeaders,
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
        } else {
          props.flashMessage("You have successfully made new post", "success");
          navigate("/");
        }
      });
  };

  return (
    <>
      <h4 className="text-center">Make new post</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            name="title"
          />
          <label htmlFor="username">Body</label>
          <input
            type="text-box"
            className="form-control"
            placeholder="Enter Body"
            name="body"
          />
          <input
            type="submit"
            className="btn btn-primary w-100 mt-3"
            value="Register"
          />
        </div>
      </form>
    </>
  );
}
