import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../../redux/store";
import Login from "../login/login";
import PollComponent from "../polls/pollcomponent";

const EventsDetailed = () => {
  const { id } = useParams();
  const event = store.getState().events[id];

  return (
    <div class="row">
      <div class="center col-9">
        <div style={{ display: "inline-block" }}>
          <img class="img_ge" src={event.photoPath}></img>
        </div>
        <div style={{ display: "inline-block" }}>
          <header>{event.header}</header>
          <header>{event.date}</header>

          <p>{event.text}</p>
        </div>
      </div>
      <div class="col-3">
        <Login />
        <PollComponent poll={store.getState().polls[0]} />
      </div>
    </div>
  );
};

export { EventsDetailed as default };
