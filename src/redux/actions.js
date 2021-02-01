//Declaring constants types for reducers and actions
const UPDATE_LOGIN = "UPDATE_LOGIN";
const UPDATE_USER = "UPDATE_USER";
const UPDATE_NEWS = "UPDATE_NEWS";
const UPDATE_EVENTS = "UPDATE_EVENTS";
const UPDATE_GALLERIES = "UPDATE_GALLERIES";
const UPDATE_POLLS = "UPDATE_POLLS";
const UPDATE_COMMENTS = "UPDATE_COMMENTS";
const UPDATE_OPTIONS = "UPDATE_OPTIONS";

// ACTION creators(updateUser, addContact),
// actions has a type(target to update) and has a payload(data to update)
const updateLogin = (update) => ({
  type: UPDATE_LOGIN,
  payload: update,
});
const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});
const updateNews = (update) => ({
  type: UPDATE_NEWS,
  payload: update,
});
const updateEvents = (update) => ({
  type: UPDATE_EVENTS,
  payload: update,
});
const updateGalleries = (update) => ({
  type: UPDATE_GALLERIES,
  payload: update,
});
const updatePolls = (update) => ({
  type: UPDATE_POLLS,
  payload: update,
});
const updateComments = (update) => ({
  type: UPDATE_COMMENTS,
  payload: update,
});
const updateOptions = (update) => ({
  type: UPDATE_OPTIONS,
  payload: update,
});

export {
  updateLogin,
  updateUser,
  updateNews,
  updateEvents,
  updateGalleries,
  updatePolls,
  updateComments,
  updateOptions,
  UPDATE_LOGIN,
  UPDATE_USER,
  UPDATE_NEWS,
  UPDATE_EVENTS,
  UPDATE_GALLERIES,
  UPDATE_POLLS,
  UPDATE_COMMENTS,
  UPDATE_OPTIONS,
};
