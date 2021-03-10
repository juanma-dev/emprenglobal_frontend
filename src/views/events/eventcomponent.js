import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const EventComponent = (props) => {
  const history = useHistory();
  return (
    <div>
      <div
        onClick={() => {
          history.push("/eventsdetailed/" + props.index);
        }}
        style={{ cursor: "pointer" }}
      >
        <div style={{ display: "inline-block" }}>
          <img class="img_ge" src={props.event.photoPath}></img>
        </div>
        <div style={{ display: "inline-block" }}>
          <header>{props.event.header}</header>
          <header>{props.event.date}</header>

          <p>{props.event.text}</p>
        </div>
      </div>
    </div>
  );
};

export { EventComponent as default };
