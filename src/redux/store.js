import { createStore } from "redux";
import reducer from "./reducer";
const DEFAULT_LOGIN = { token: "" };
const DEFAULT_USER = {
  id: "",
  username: "",
  password: "",
  email: "",
  photoPath: "http://192.168.43.29:8888/emprenglobal/users/0/anonymous.png",
  authorities: [],
};

let DEFAULT_STATE = {
  news: [],
  events: [],
  galleries: [],
  polls: [],
  comments: [],
  login: DEFAULT_LOGIN,
  user: DEFAULT_USER,
  voted: {},
};

const store = createStore(reducer, DEFAULT_STATE); //we're using the redux library here

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'foo'}))
store.dispatch(updateUser({foo: 'baz'}))

store.dispatch(addContact({name: 'Juan', number: '123456789'}))
store.dispatch(addContact({name: 'Maria', number: '123456789'}))
*/
export { store as default, DEFAULT_USER, DEFAULT_LOGIN };
