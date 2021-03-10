import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import NewsComponent from "./newscomponent.js";
import store from "../../redux/store";
import Login from "../login/login";
import PollComponent from "../polls/pollcomponent";

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
        {props.news.map((n, index) => (
          <li key={index}>
            <div class="row">
              <div class="center col-9">
                <NewsComponent new={n} index={index} />
              </div>
              {index === 0 && (
                <div class="col-3">
                  <Login />
                </div>
              )}
              {index === 1 && (
                <div class="col-3">
                  <PollComponent poll={store.getState().polls[0]} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { News as default };
