import React from "react";

// ColorItem component
function ColorItem(props) {
    return <li style={{ color: props.color }}>{props.color}</li>;
  }

  export default ColorItem