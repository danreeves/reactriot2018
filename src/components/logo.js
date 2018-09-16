import React from "react";

const wrapperStyle = {
  position: "absolute",
  top: "40%",
  width: "100%",
  textAlign: "center"
};

const logoStyle = {
  fontFamily:
    "Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif",
  backgroundColor: "rgba(0,0,0,0.5)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  textShadow: "#00807f87 3px 5px 1px",
  fontSize: "100px",
  width: "100%",
  userSelect: "none",
  textAlign: "center"
};

const taglineStyle = {
  ...logoStyle,
  fontFamily: "Brush Script MT,cursive",
  fontSize: "1.3rem",
  bottom: "30px",
  position: "absolute"
};

export default function Logo() {
  return (
    <div id="1" style={wrapperStyle}>
      <div id="2" style={logoStyle}>
        <span style={{ fontSize: "1.5em", verticalAlign: "middle" }}>❏</span>
        DANCorp.
      </div>
      <div id="3" style={taglineStyle}>
        Never forget who you're working for...
      </div>
    </div>
  );
}
