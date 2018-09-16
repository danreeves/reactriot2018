import React from "react";

const bar = {
  background: "darkgrey",
  height: "25px",
  width: "100%",
  border: "1px solid black",
  overflow: "hidden",
  margin: "0.5rem 0",
  whiteSpace: "nowrap",
  padding: "1px",
  background: "darkgrey",
  position: "relative"
};

const bars = {
  position: "absolute",
  height: "calc(100% - 2px)",
  width: "100%",
  backgroundImage:
    "linear-gradient(90deg, darkblue 44.12%, darkgrey 44.12%, darkgrey 50%, darkblue 50%, darkblue 94.12%, darkgrey 94.12%, darkgrey 100%)",
  backgroundSize: "34.00px 34.00px"
};

const loader = {
  width: "100%",
  position: "relative",
  height: "100%",
  background: "darkgrey"
};

export default function Loader(props) {
  const loadbar = {
    ...loader,
    left: props.loading ? "100%" : "0%",
    transition: (props.loading ? props.time / 1000 : "0") + "s all linear"
  };
  return (
    <div style={bar}>
      <div style={bars} />
      <div style={loadbar} />
    </div>
  );
}
