import React    from "react";
import template from "./DropDown.jsx";


class DropDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selVal : 'None',
      arr : ["a","b","c","d","e"]
    };
    this.onChg = this.onChg.bind(this);
  }

  onChg(e){
    this.setState({selVal:e.target.value});
  }

  render() {
    return (
      <div>
        <select onChange={this.onChg} className="list list-simple">
          {
            this.state.arr.map(a => <MyOpt key={a} p={a} />)
          }
        </select>
        <br />
        <button className="btn btn-info">You selected : {this.state.selVal}</button>
      </div>
    );
  }
}

class MyOpt extends React.Component{
  render(){
    return(
      <option value={this.props.p} >{this.props.p}</option>
    );
  }
}

export default DropDown;
