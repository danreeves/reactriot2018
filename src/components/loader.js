import React from "react";

const bar = {
  background: "darkgrey",
  height: "25px",
  width: "100%",
  border: "1px solid black",
  overflow: "hidden"
};

const section = {
  width: "15px",
  height: "calc(100% - 2px)",
  margin: "1px",
  background: "darkblue",
  float: "left"
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
    transition: (props.loading ? props.time : "0") + "s all linear"
  };
  return (
    <div style={bar}>
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={section} />
      <div style={loadbar} />
    </div>
  );
}
