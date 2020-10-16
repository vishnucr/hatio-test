import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./add-container.scss";
import { UserItem } from "../_components/user-item";
import { RepoItem } from "../_components/repo-item";

const AddContainer = () => {
  // let list = useSelector(selectList);
  const [init, setInit] = useState(true);
  const [list, setList] = useState([]);
  const [type, setType] = useState('user');
  const search_input = useRef(null);

  let BASE_URL = "https://api.github.com";

  const handleType = (event) => {
    setType(event.target.value);
    setList([]);
    search_input.current.value = '';
    setInit(true);
  }
  const search = (event) => {
    event.preventDefault();
    const keyword = search_input.current.value;
    let url;
    switch(type){
      case 'user':
        url = `${BASE_URL}/users/${keyword}`;
        break;
        case 'repository':
        url = `${BASE_URL}/search/repositories?q=${keyword}`;
        break;
        default :
        url = `${BASE_URL}/users/${keyword}`;
        break;
    }
    axios.get(url).then(
      (res) => {
        let item;
        setInit(false);
        type === 'user' ? (item = [res.data]) : (item = res.data.items);
        setList(item);
      },
      (err) => {
        setInit(false);
        console.log(err);
        setList([]);
      }
    );
  };

  const generateList = (list, type) => {
    let list_type = [];
    type === 'user' ?
      list_type = list.map((item, index) => (
        <UserItem item={item} key={index} />
      )) : list_type = list.map((item, index) => (
        <RepoItem item={item} key={index} />
      ))

    return list_type;
  } 
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <nav className="hatio-heading">
          <h1 className="title">Add New</h1>
          <Link className="button is-warning" to="/">
            Back
          </Link>
        </nav>
        {/* Search */}
        <section className="search-container">
          <div>
            <h3 className="subtitle has-text-centered">Search Github</h3>
            <form name="searchForm" onSubmit={search}>
              <div className="field has-addons has-addons-centered">
              <p className="control">
                  <span className="select">
                    <select value={type} onChange={handleType}>
                      <option value='repository'>Repository</option>
                      <option value='user'>User</option>
                    </select>
                  </span>
                </p>
                <div className="control">
                  <input
                    ref={search_input}
                    className="input"
                    name="search"
                    type="text"
                    placeholder="Find a repository or user"
                  />
                </div>
                <div className="control">
                  <button className="button is-info" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* List */}
        {list.length === 0 && !init && (
          <p className="has-text-centered">No Result</p>
        )}

        {generateList(list,type)}
      </div>
    </section>
  );
};

export { AddContainer };
