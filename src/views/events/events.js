import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import EventComponent from "./eventcomponent.js";
import store from "../../redux/store";

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
        {store.getState().events.map((e, index) => (
          <li key={index}>
            <EventComponent event={e} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Events as default };
