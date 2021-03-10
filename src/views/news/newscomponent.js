import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const NewsComponent = (props) => {
  const history = useHistory();
  return (
    <div>
      <div
        onClick={() => {
          history.push("/newsdetailed/" + props.index);
        }}
        style={{ cursor: "pointer" }}
      >
        <div style={{ display: "inline-block" }}>
          <img class="img_ge" src={props.new.photoPath}></img>
        </div>
        <div style={{ display: "inline-block" }}>
          <header>{props.new.header}</header>
          <header>{props.new.date}</header>

          <p>{props.new.location}</p>
        </div>
      </div>
    </div>
  );
};

export { NewsComponent as default };
