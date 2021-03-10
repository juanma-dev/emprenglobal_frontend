import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Option from "./options";

const PollComponent = (props) => {
  const sumEachVote = (total, { votes }) => {
    return total + votes;
  };
  const totalVotes = props.poll.options.reduce(sumEachVote, 0);

  return (
    <div>
      <div class="container">
        <header>{props.poll.title}</header>
        {props.poll.options.map((o, index) => (
          <Option option={o} total={totalVotes} />
        ))}
      </div>
    </div>
  );
};

export { PollComponent as default };
