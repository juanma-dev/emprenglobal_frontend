import store from "./redux/store";
import {
  updateLogin,
  updateUser,
  updateNews,
  updateEvents,
  updateGalleries,
  updatePolls,
  updateComments,
  updateOptions,
  updateVoted,
} from "./redux/actions";
import { SERVER_URL, SERVER_LOGIN } from "./configuration.js";
import UserComponent from "./views/users/usercomponent";

function fetchUserByName(username) {
  const token = store.getState().login.token;
  fetch(SERVER_URL + "user/" + username, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      store.dispatch(updateUser(json));
      console.log(
        store.getState().user.authorities.some((a) => a.aname === "ROLE_ADMIN")
      );
    })
    .catch((e) => {
      console.log(e);
    });
}

function fetchUserById(id, userSet) {
  const token = store.getState().login.token;
  fetch(SERVER_URL + "user/" + id, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      userSet(json);
    })
    .catch((e) => {
      console.log(e);
    });
}

function fetchNews() {
  fetch(SERVER_URL + "news")
    .then((response) => response.json())
    .then((json) => {
      store.dispatch(updateNews(json));
    })
    .catch((e) => {
      console.log(e);
    });
}

function fetchEvents() {
  fetch(SERVER_URL + "events")
    .then((response) => response.json())
    .then((json) => {
      store.dispatch(updateEvents(json));
    })
    .catch((e) => {
      console.log(e);
    });
}

function fetchGalleries() {
  fetch(SERVER_URL + "galleries")
    .then((response) => response.json())
    .then((json) => {
      store.dispatch(updateGalleries(json));
    })
    .catch((e) => {
      console.log(e);
    });
}

function fetchPolls() {
  fetch(SERVER_URL + "polls")
    .then((response) => response.json())
    .then((json) => {
      store.dispatch(updatePolls(json));
    })
    .catch((e) => {
      console.log(e);
    });
}

function fetchComments() {
  fetch(SERVER_URL + "comments")
    .then((response) => response.json())
    .then((json) => {
      store.dispatch(updateComments(json));
    })
    .catch((e) => {
      console.log(e);
    });
}

function fetchOptions() {
  fetch(SERVER_URL + "options")
    .then((response) => response.json())
    .then((json) => {
      store.dispatch(updateOptions(json));
    })
    .catch((e) => {
      console.log(e);
    });
}

export {
  fetchUserByName,
  fetchUserById,
  fetchEvents,
  fetchNews,
  fetchGalleries,
  fetchPolls,
  fetchComments,
  fetchOptions,
};
