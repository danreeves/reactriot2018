import React from "react";

const logoStyle = {
  position: "absolute",
  fontFamily:
    "Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif",
  top: "40%",
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
  top: "calc(40% + 120px)",
  fontFamily: "Brush Script MT,cursive",
  fontSize: "1.3rem"
};

export default function Logo() {
  return (
    <React.Fragment>
      <div style={logoStyle}>
        <span style={{ fontSize: "1.5em", verticalAlign: "middle" }}>❏</span>
        DANCorp.
      </div>
      <div style={taglineStyle}>Never forget who you're working for...</div>
    </React.Fragment>
  );
}
