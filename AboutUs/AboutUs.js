import React    from "react";
import {UtilCls} from '../UtilCls';

class AboutUs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      var : 0
    } 
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({var: parseInt(e.target.value)});
  }

  render() {
    return (
      <div>
        <h2 align="center"><u>Welcome to My Website</u></h2><br />

        <table className="table table-striped">
          <tr><td>Enter a number : </td><td><input type="text" name="num" onChange={this.onChange} /></td></tr>
          <br />
          <tr><td>Sqare root </td><td><Sqrt a={this.state.var} /></td></tr>
          <tr><td>Sqare </td><td><Sqare b={this.state.var} /></td></tr>
          <tr><td>Cube </td><td><Cube c={this.state.var} /></td></tr>
        </table>
      </div>
    );
  }
}

class Sqrt extends React.Component{
  render(){
    return (
      <div className="alert alert-info">
        {
          UtilCls.MyRoot(this.props.a)
        }
      </div>
    );
  }
}

class Sqare extends React.Component{
  render(){
    return (
      <div className="alert alert-warning">
        {
          UtilCls.MySqr(this.props.b)
        }
      </div>
    );
  }
}

class Cube extends React.Component{
  render(){
    return (
      <div className="alert alert-danger">
        {
          UtilCls.MyCub(this.props.c)
        }
      </div>
    );
  }
}
export default AboutUs;
