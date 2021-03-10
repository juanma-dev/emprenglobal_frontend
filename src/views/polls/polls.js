import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PollComponent from "./pollcomponent.js";
import VoteComponent from "./votecomponent.js";
import store from "../../redux/store";

const Polls = (props) => {
  return (
    <div class="row">
      <span>Encuestas</span>
      <div>
        {store.getState().polls.map(
          (p, index) =>
            (!props.voted[index] && (
              <div class="col-9" key={index}>
                <VoteComponent poll={p} index={index} />
              </div>
            )) || (
              <div class="col-9" key={index}>
                <PollComponent poll={p} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export { Polls as default };
