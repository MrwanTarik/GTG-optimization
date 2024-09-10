import React from "react";

const SuperscriptTrademark = ({ text }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: text.replace(
          /®/g,
          '<span style="font-size:0.75em; vertical-align:super;">®</span>'
        ),
      }}
    />
  );
};

export default SuperscriptTrademark;
