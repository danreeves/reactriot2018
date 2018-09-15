import React from "react";
const logoutStyles = {
  border: "5px ridge beige",
  background: "lightgrey",
  cursor: "pointer",
  fontWeight: "bold",
  padding: "0.25rem"
};

const bottomRightStyles = {
  position: "absolute",
  bottom: "0.5rem",
  right: "0.5rem"
};

export default function Button(props) {
  const style = Object.assign(
    {},
    logoutStyles,
    props.style,
    props.bottomRight ? bottomRightStyles : {}
  );
  return (
    <button type="button" {...props} style={style}>
      {props.children}
    </button>
  );
}
