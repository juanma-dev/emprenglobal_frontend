import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import NewsComponent from "./newscomponent.js";
import store from "../../redux/store";

const newsObject = {
  picPath: "",
  header: "",
  date: "",
  text: "",
};

const newsArray = [{ picPath: "a", header: "b", date: "c", text: "d" }];

const News = (props) => {
  return (
    <div>
      <span>Noticias</span>
      <ul>
        {store.getState().news.map((n, index) => (
          <li key={index}>
            <NewsComponent new={n} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { News as default };
