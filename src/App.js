import React from "react";
import Emprenglobal from "./emprenglobal.js";
import store from "./redux/store";
import { connect, Provider } from "react-redux";

const App = (props) => {
  return (
    <Provider store={store}>
      <Emprenglobal />
    </Provider>
  );
};
export default App;
