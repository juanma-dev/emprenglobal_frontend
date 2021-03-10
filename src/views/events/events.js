import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import EventComponent from "./eventcomponent.js";
import store from "../../redux/store";
import Login from "../login/login";
import PollComponent from "../polls/pollcomponent";

const EventObject = {
  picPath: "",
  header: "",
  date: "",
  location: "",
};

const eventsArray = [{ picPath: "a", header: "b", date: "c", text: "d" }];

const Events = (props) => {
  return (
    <div>
      <span>Eventos</span>
      <ul>
        {props.events.map((e, index) => (
          <li key={index}>
            <div class="row">
              <div class="center col-9">
                <EventComponent event={e} index={index} />
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

export { Events as default };
