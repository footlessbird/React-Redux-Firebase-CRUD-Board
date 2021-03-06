import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";


const PostList = ({ storedPosts }) => {
  console.log(storedPosts)
  function renderPost() {
    return (
      storedPosts &&
      storedPosts.map(post => {
        return (
          <li className="collection-item row" key={post.createdAt}>
            <Link to={"/post/" + post.id} >
              <h6>
                <strong>{post.title}</strong>
              </h6>
              <ul>
                <li>
                  <span className="black-text">
                    written by {post.authorFirstName} {post.authorLastName}
                  </span>
                </li>
                <li>
                  <span className="grey-text">
                    {moment(post.createdAt.toDate()).calendar()}
                  </span>
                </li>
              </ul>
            </Link>
          </li>
        );
      })
    );
  }

  return (
    <div className="post-list section">
      <ul className="collection col s12">{renderPost()}</ul>
    </div>
  );
};

export default PostList;
