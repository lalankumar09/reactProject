import React    from "react";
import template from "./Career.jsx";

class Career extends React.Component {
  render() {
    return (
      <div>
        <h3>The different Carrer opportunities are available as :</h3><br/>
        <ul>
          <li>Software Developer</li>
          <li>Business Analyst</li>
          <li>System Engineer</li>
          <li>Java Developer</li>
          <li>Full stack Developer</li>
        </ul>
      </div>
    );
  }
}

export default Career;
