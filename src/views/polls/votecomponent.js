import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import VoteOption from "./voteoption";
import {
  SERVER_URL,
  SERVER_LOGIN,
  SUCCESS_UPLOAD_ELEMENT,
  ERROR_UPLOAD_ELEMENT,
} from "../../configuration.js";
import store from "../../redux/store";
import { updateVoted } from "../../redux/actions";

const VoteComponent = (props) => {
  const [logError, setLogError] = useState("");
  const [logSuccess, setLogSuccess] = useState("");
  const [optionId, setOptionId] = useState(0);

  function onValueChange(event) {
    setOptionId(parseInt(event.target.id));
  }

  function handleVote(event) {
    event.preventDefault();
    const token = store.getState().login.token;

    props.poll.options.filter((o) => o.id === optionId)[0].votes++;
    const option = { id: optionId };
    console.log(option);

    fetch(SERVER_URL + "vote", {
      method: "POST",
      body: JSON.stringify(option),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          setLogSuccess(SUCCESS_UPLOAD_ELEMENT);
          console.log("It works");
        }
      })
      .catch((e) => {
        setLogError(ERROR_UPLOAD_ELEMENT);
        console.log(e);
      });
    const vote = {};
    vote[props.index] = true;
    store.dispatch(updateVoted(vote));
  }

  return (
    <div>
      <div class="container">
        <header>{props.poll.title}</header>
        <form onSubmit={handleVote}>
          {props.poll.options.map((o, index) => (
            <VoteOption option={o} onValueChange={onValueChange} />
          ))}
          <input type="submit" value="Votar" />
        </form>
      </div>
    </div>
  );
};

export { VoteComponent as default };
