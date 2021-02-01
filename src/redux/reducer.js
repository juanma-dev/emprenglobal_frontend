import { combineReducers } from "redux";
import {
  UPDATE_LOGIN,
  UPDATE_USER,
  UPDATE_NEWS,
  UPDATE_EVENTS,
  UPDATE_GALLERIES,
  UPDATE_POLLS,
  UPDATE_COMMENTS,
  UPDATE_OPTIONS,
} from "./actions";

const loginReducer = (state = {}, action) => {
  //here we gotta set a default state
  if (action.type === UPDATE_LOGIN) return { ...state, ...action.payload };
  return state;
};
const userReducer = (state = {}, action) => {
  //here we gotta set a default state
  if (action.type === UPDATE_USER) return { ...state, ...action.payload };
  return state;
};
const newsReducer = (state = [], action) => {
  //here we gotta set a default state
  if (action.type === UPDATE_NEWS) return [...state, ...action.payload];
  return state;
};
const eventsReducer = (state = [], action) => {
  //here we gotta set a default state
  if (action.type === UPDATE_EVENTS) return [...state, ...action.payload];
  return state;
};
const galleriesReducer = (state = [], action) => {
  //here we gotta set a default state
  if (action.type === UPDATE_GALLERIES) return [...state, ...action.payload];
  return state;
};
const pollsReducer = (state = [], action) => {
  //here we gotta set a default state
  if (action.type === UPDATE_POLLS) return [...state, ...action.payload];
  return state;
};
const commentsReducer = (state = [], action) => {
  //here we gotta set a default state
  if (action.type === UPDATE_COMMENTS) return [...action.payload].reverse();
  return state;
};
const optionsReducer = (state = [], action) => {
  //here we gotta set a default state
  if (action.type === UPDATE_OPTIONS) return [...state, ...action.payload];
  return state;
};

const reducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  news: newsReducer,
  events: eventsReducer,
  galleries: galleriesReducer,
  polls: pollsReducer,
  comments: commentsReducer,
  options: optionsReducer,
});

export { reducer as default };
