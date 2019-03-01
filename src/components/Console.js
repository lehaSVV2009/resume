import React from "react";
import Paper from "material-ui/Paper";

import "./Console.css";

const consoleStyle = {
  width: "100%",
  display: "inline-block",
  background: "#263238"
};

export default ({ children }) => (
  <Paper zDepth={3} style={consoleStyle}>
    <div className="console-header">
      <div className="console-buttons">
        <div className="console-button btn-1" />
        <div className="console-button btn-2" />
        <div className="console-button btn-3" />
      </div>
    </div>
    <div className="console-content">{children}</div>
  </Paper>
);
