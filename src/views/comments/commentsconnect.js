import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import CommentComponent from "./commentcomponent";
import store from "../../redux/store";
import UserComponent from "../users/usercomponent";
import { SERVER_URL } from "../../configuration";
import { fetchComments } from "../../fetches";
import { connect } from "react-redux";

const CommentsConnect = (props) => {
  const [text, setText] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const user = store.getState().user;

  const submit = (e) => {
    e.preventDefault();
    const token = store.getState().login.token;
    fetch(SERVER_URL + "comment", {
      method: "POST",
      body: JSON.stringify({ text: text, uid: user.id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          setLoginStatus("");
          fetchComments();
          setText("");
        } else {
          setLoginStatus("Error al subir comentario");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <span>Comentarios</span>
      <br />
      <br />
      <div>
        <UserComponent user={user} />
      </div>
      <p>{loginStatus}</p>
      <form onSubmit={submit}>
        <textarea
          name="message"
          rows="7"
          cols="49"
          value={text}
          placeholder="Introduzca su comentario"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <br />
        <input type="submit" name="Comentar" />
      </form>
      <ul>
        {props.comments.map((c, index) => (
          <li key={index}>
            <CommentComponent comment={c} />
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentsConnect);
