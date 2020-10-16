import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove,  selectRepo } from "../_slices/repoSlice";

const RepoItem = (props) => {
  const { item } = props;
  const repo = useSelector(selectRepo);
  const dispatch = useDispatch();
  let added = false;
  let index = 0;

  repo.forEach((repo,i) => {
    if (repo.id === item.id) {
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
            <img src={item.avatar_url ? item.avatar_url : 'https://via.placeholder.com/150'} alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{item.name ? item.name.toUpperCase() : 'Unnamed'}</strong>
              <a href={item.html_url}>
                <small> @{item.full_name}</small>
              </a>
              <br />
              <i>Owner: <a href={item.owner.url}>{item.owner.login}</a></i>
            </p>
            <p><strong>Description:</strong> {item.description}</p>
          </div>
          <div className="tags are-medium">
            <span className="tag">Forks: {item.forks_count}</span>
            <span className="tag">Watchers: {item.watchers}</span>
            <span className="tag">Issues: {item.open_issues}</span>
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

export { RepoItem };
