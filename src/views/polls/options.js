import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Option = (props) => {
  return (
    <div>
      <div>
        <label for="option_progress">{props.option.title}</label>
        <progress
          id="option_progress"
          value={(props.option.votes / props.total) * 100}
          max="100"
        />
      </div>
    </div>
  );
};

export { Option as default };
