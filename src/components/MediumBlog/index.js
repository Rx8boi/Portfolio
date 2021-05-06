import React from "react";
import c from "./MediumBlog.module.css";
import moment from "moment";
import {  withRouter } from "react-router-dom";
import ToText from "../ToText";

const MediumBlog = (props, p) => {
  return (
    <div className={`${c.grid}`}>
      <div className={c.cardsmall}>
        <div
          className={c.cardpost__image}
          style={{ backgroundImage: `url(${props.thumbnail})` }}
        >
          <div className={c.authorimg}>
            <a
              href={props.profileurl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: `url(${props.avtar})` }}
            >
              Written By Charles
            </a>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://cdbutle.medium.com/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Medium blog"
              className={c.textfiordblue}
            >
              {props.title}
            </a>
          </h5>
          <p className={c.cardText}>{`${ToText(
            props.description.substring(0, 1000)
          )}...`}</p>
          <br />
          <hr />
          <span className="text-dark">
            <p className={c.cardText}>{props.author}</p>
            <p className={c.cardText}>
              {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
            </p>
          </span>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default withRouter(MediumBlog);
