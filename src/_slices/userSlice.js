import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [{
      "login": "vishnucr",
      "id": 5832452,
      "node_id": "MDQ6VXNlcjU4MzI0NTI=",
      "avatar_url": "https://avatars1.githubusercontent.com/u/5832452?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/vishnucr",
      "html_url": "https://github.com/vishnucr",
      "followers_url": "https://api.github.com/users/vishnucr/followers",
      "following_url": "https://api.github.com/users/vishnucr/following{/other_user}",
      "gists_url": "https://api.github.com/users/vishnucr/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/vishnucr/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/vishnucr/subscriptions",
      "organizations_url": "https://api.github.com/users/vishnucr/orgs",
      "repos_url": "https://api.github.com/users/vishnucr/repos",
      "events_url": "https://api.github.com/users/vishnucr/events{/privacy}",
      "received_events_url": "https://api.github.com/users/vishnucr/received_events",
      "type": "User",
      "site_admin": false,
      "name": "vishnu",
      "company": "23Designs",
      "blog": "www.23d.in",
      "location": "Kerala",
      "email": null,
      "hireable": null,
      "bio": "Front End Dev",
      "twitter_username": null,
      "public_repos": 30,
      "public_gists": 0,
      "followers": 1,
      "following": 5,
      "created_at": "2013-11-01T15:59:32Z",
      "updated_at": "2020-10-15T18:26:08Z"
    }],
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload)
    },
    remove: (state, action) => {
      state.list.splice(action.payload,1);
    },
  },
});

export const { add, remove } = userSlice.actions;

export const selectUser = state => state.user.list;

export default userSlice.reducer;
