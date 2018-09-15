import React from "react";

const styles = {
  border: "1rem ridge beige",
  maxWidth: "25%",
  padding: "0.5rem",
  background: "lightslategray"
};

export default function Box(props) {
  const style = Object.assign({}, styles, props.style);
  return <div style={style}>{props.children}</div>;
}
