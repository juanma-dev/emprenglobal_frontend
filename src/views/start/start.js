import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import GalleryImg from "./galleryimg.js";
import Dots from "./dots";
import store from "../../redux/store";
import NewsComponent from "../news/newscomponent.js";
import EventsComponent from "../events/eventcomponent.js";

const Start = (props) => {
  const [indexSelected, setIndexSelected] = useState(0);
  const galleries = props.galleries;
  const news = props.news.slice(0, 3);
  const events = props.events.slice(0, 3);
  const galleriesLength = galleries.length;

  const [conf, setConf] = useState(setActive(indexSelected));

  function setActive(indx) {
    const [backColorOn, backColorOff] = [{}, {}];
    backColorOn["background-color"] = "#4caf50";
    backColorOff["background-color"] = "transparent";

    return galleries.map((c, i) => {
      if (i === indx) {
        return { img: { display: "block" }, dot: backColorOn };
      }
      return { img: { display: "none" }, dot: backColorOff };
    });
  }

  function next() {
    if (indexSelected + 1 === galleriesLength) {
      setIndexSelected(0);
    } else {
      setIndexSelected(indexSelected + 1);
    }
    setConf(setActive(indexSelected));
  }

  function preview() {
    if (indexSelected - 1 < 0) {
      setIndexSelected(galleriesLength - 1);
    } else {
      setIndexSelected(indexSelected - 1);
    }
    setConf(setActive(indexSelected));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <div class="row">
        <div class="col-12">
          <div>
            <div class="slide-container">
              {galleries.map((g, indx) => (
                <GalleryImg gallery={g} conf={conf[indx]?.img} />
              ))}
              <div class="slide-buttons">
                <div
                  class="arrow-left"
                  onClick={() => {
                    preview();
                  }}
                >
                  &#10094;
                </div>
                <div
                  class="arrow-right"
                  onClick={() => {
                    next();
                  }}
                >
                  &#10095;
                </div>
                {galleries.map((g, indx) => (
                  <Dots
                    index={indx}
                    conf={conf[indx]?.dot}
                    setConf={setConf}
                    setActive={setActive}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <h3 class="center">Noticias Recientes</h3>
        <div class="col-12">
          {news.map((n, indx) => (
            <div class="col-4">
              <div class="border center">
                <NewsComponent new={n} index={indx} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="row">
        <h3 class="center">Eventos Recientes</h3>
        <div class="col-12">
          {events.map((e, indx) => (
            <div class="col-4">
              <div class="border center">
                <EventsComponent event={e} index={indx} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Start as default };
