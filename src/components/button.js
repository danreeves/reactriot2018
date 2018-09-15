import React from "react";
const logoutStyles = {
  border: "5px ridge beige",
  background: "beige",
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
  const style = {
    ...logoutStyles,
    ...props.style,
    ...(props.bottomRight ? bottomRightStyles : {})
  };
  const { bottomRight, ...rest } = props;
  return (
    <button type="button" {...rest} style={style}>
      {props.children}
    </button>
  );
}
