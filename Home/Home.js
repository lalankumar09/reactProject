import React    from "react";
import { Link, Switch, Route } from "react-router-dom";
import LiveData from "../LiveData/LiveData";

class Home extends React.Component {
  render(){
    return(
      <div>
        <LiveData />
      </div>
    );
  }
}

export default Home;
