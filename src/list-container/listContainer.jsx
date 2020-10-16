import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../_slices/userSlice";
import { selectRepo } from "../_slices/repoSlice";
import { UserItem } from "../_components/user-item";
import { RepoItem } from "../_components/repo-item";

const ListContainer = () => {
  let user = useSelector(selectUser);
  let repo = useSelector(selectRepo);
  const [tab, setTab] = useState("user");

  const changeTab = (tab) => {
    setTab(tab);
  };

  return (
    <section className="section">
      <div className="container">
        <nav className="hatio-heading">
          <h1 className="title">My List</h1>
          <Link className="button is-primary" to="/new">
            Add
          </Link>
        </nav>
        {/* List */}
        <div className="tabs is-centered">
          <ul>
            <li
              className={`${tab === "user" && "is-active"}`}
              onClick={() => setTab("user")}
            >
              <a>Users</a>
            </li>
            <li
              className={`${tab === "repo" && "is-active"}`}
              onClick={() => setTab("repo")}
            >
              <a>Repositories</a>
            </li>
          </ul>
        </div>
        {tab === "user" && (
          <div>
              {user.length === 0 && <p className="has-text-centered">Empty</p>}
            {user.map((item, index) => (
            <>
              <UserItem item={item} key={index} />
            </>
            ))}
          </div>
        )}
        {tab === "repo" && (
          <div>
              {repo.length === 0 && <p className="has-text-centered">Empty</p>}
            {repo.map((item, index) => (
            <>
              <RepoItem item={item} key={index} />
            </>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { ListContainer };
