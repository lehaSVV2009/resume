import React from "react";
import Responsive from "react-responsive";

/**
 * Marks that all the components inside are shown only if screen has less than desktop size.
 */
export default ({ children }) => (
  <Responsive maxWidth={991}>{children}</Responsive>
);
