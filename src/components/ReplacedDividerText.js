import React from "react";

const ReplacedDividerText = ({ text, divider, replacement }) => {
  const paragraphs =
    text && typeof text === "string"
      ? text.split(divider).filter((text) => text && text.trim())
      : [];
  return (
    <span>
      {paragraphs.map((text, index) => (
        <span key={`replaced-divider-text-${index}`}>
          {text}
          {replacement}
        </span>
      ))}
    </span>
  );
};

export default ReplacedDividerText;
