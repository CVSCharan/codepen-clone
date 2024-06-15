import React from "react";

export default function CodeOutputSide(props) {
  const { srcDoc } = props;
  return (
    <iframe
      className="iframe"
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
    />
  );
}
