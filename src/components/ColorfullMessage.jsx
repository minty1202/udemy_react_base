import React from "react";

export const ColorfullMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color // color: color と同義
  };

  return <p style={contentStyle}>{children}</p>
};
