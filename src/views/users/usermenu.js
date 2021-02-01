import React, { useState, useEffect } from "react";
import Menu from "./menu";
import UserComponent from "./usercomponent";

const UserMenu = (props) => {
  const [display, setDisplay] = useState({ display: "none" });
  const [arrow, setArrow] = useState({ arrow: " ▿" });

  const toggle = () => {
    if (display.display === "none") {
      setDisplay({ display: "block" });
      setArrow({ arrow: " ▵" });
    } else {
      setDisplay({ display: "none" });
      setArrow({ arrow: " ▿" });
    }
  };

  return (
    <span>
      <span onClick={() => toggle()}>
        <UserComponent user={props.user} />
        <span>{arrow.arrow}</span>
      </span>
      <Menu display={display} />
    </span>
  );
};

export { UserMenu as default };
