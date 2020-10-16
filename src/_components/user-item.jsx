import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove,  selectUser } from "../_slices/userSlice";

const UserItem = (props) => {
  const { item } = props;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let added = false;
  let index = 0;

  user.forEach((user,i) => {
    if (user.id === item.id) {
      added = true;
      index = i;
      return;
    }
  });

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={
                item.avatar_url
                  ? item.avatar_url
                  : "https://via.placeholder.com/150"
              }
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{item.name ? item.name.toUpperCase() : "Unnamed"}</strong>
              <a href={item.html_url}>
                <small>@{item.login}</small>
              </a>
              <br />
              <i>{item.location}</i>
            </p>
          </div>
          <div className="tags are-medium">
            <span className="tag">Following: {item.following}</span>
            <span className="tag">Followers: {item.followers}</span>
            <span className="tag">
              Public Repositories: {item.public_repos}
            </span>
          </div>
        </div>
        <div>
          {added ? (
            <button
              className="button is-small is-danger"
              onClick={() => dispatch(remove(index))}>
              Remove Favorites
            </button>
          ) : (
            <button
              className="button is-small is-info"
              onClick={() => dispatch(add(item))}>
              Add to Favorites
            </button>
          )}
        </div>
      </article>
    </div>
  );
};

export { UserItem };
