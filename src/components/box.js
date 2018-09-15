import React from "react";

const styles = {
  border: "1rem ridge beige",
  maxWidth: "25%",
  padding: "0.5rem",
  background: "lightslategray",
  margin: "0.5rem",
  boxShadow: "rgba(0,0,0,0.5) 3px 3px 5px 1px",
  position: "relative"
};

export default function Box(props) {
  const style = Object.assign({}, styles, props.style);
  return <div style={style}>{props.children}</div>;
}
