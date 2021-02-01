import React, { useState, useEffect } from "react";
import UserComponent from "../users/usercomponent";

const CommentComponent = (props) => {
  return (
    <div>
      <UserComponent user={props.comment.user} />
      <div style={{ display: "inline-block" }}>
        <p>{props.comment.text}</p>
      </div>
    </div>
  );
};

export { CommentComponent as default };
