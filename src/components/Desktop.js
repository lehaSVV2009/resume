import React from "react";
import Responsive from "react-responsive";

/**
 * Marks that all the components inside are shown only if screen has more than desktop size.
 */
export default ({ children }) => (
  <Responsive minWidth={992}>{children}</Responsive>
);
