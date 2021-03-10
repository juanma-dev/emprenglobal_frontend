import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../../redux/store";
import Login from "../login/login";
import PollComponent from "../polls/pollcomponent";

const NewsDetailed = () => {
  const { id } = useParams();
  const news = store.getState().news[id];

  return (
    <div class="row">
      <div class="center col-9">
        <div style={{ display: "inline-block" }}>
          <img class="img_ge" src={news.photoPath}></img>
        </div>
        <div style={{ display: "inline-block" }}>
          <header>{news.header}</header>
          <header>{news.date}</header>
          <p>{news.location}</p>
        </div>
        <div>{news.text}</div>
      </div>
      <div class="col-3">
        <Login />
        <PollComponent poll={store.getState().polls[0]} />
      </div>
    </div>
  );
};

export { NewsDetailed as default };
