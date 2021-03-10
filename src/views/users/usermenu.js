import React, { useState, useEffect, useRef } from "react";
import Menu from "./menu";
import UserComponent from "./usercomponent";

const UserMenu = (props) => {
  const [display, setDisplay] = useState({ display: "none" });
  const [arrow, setArrow] = useState({ arrow: " ▿" });
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current?.contains(e.target) && display.display === "block") {
      setDisplay({ display: "none" });
      setArrow({ arrow: " ▿" });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

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
    <span id="user_component">
      {(!props.user?.username && <UserComponent user={props.user} />) || (
        <span ref={myRef}>
          <span onClick={() => toggle()}>
            <UserComponent user={props.user} />
            <span>{arrow.arrow}</span>
          </span>
          <Menu display={display} user={props.user} />
        </span>
      )}
    </span>
  );
};

export { UserMenu as default };
