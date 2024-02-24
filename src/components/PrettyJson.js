import React from "react";

import PrettyJsonObject from "./PrettyJsonObject";

import "./PrettyJson.scss";

// TODO extract PrettyJsonArray
// or use react-json-view or smth like that
const PrettyJson = ({ array }) => (
  <ul className="pretty-json">
    <li>[</li>
    <li>
      <ul className="row">
        {Array.isArray(array) &&
          array.map((item, index) => (
            <PrettyJsonObject key={index} object={item} />
          ))}
      </ul>
    </li>
    <li>]</li>
  </ul>
);

export default PrettyJson;
