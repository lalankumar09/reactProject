import React    from "react";
import template from "./Instruction.jsx";

class Instruction extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Instruction;
