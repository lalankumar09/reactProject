import React    from "react";
import template from "./Automobile.jsx";
import UtilCls from "../UtilCls.js";

class Automobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price : 0,
      bPrice : 0,
      rTax : 0,
      sTax : 0,
      cCharge : 0,
      total : 0
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({price : parseInt(e.target.value)});
  }

  render() {
    return(
      <div>
        <table className="table table-striped">
          <tr><td>Enter Car Price : </td><td><input type="text" name="num" onChange={this.onChange} /></td></tr>
          <br />
          <tr><td>Base Price </td><td><Bprice a={this.state.price} /></td></tr>
          <tr><td>Road Tax </td><td><Rtax b={this.state.price} /></td></tr>
          <tr><td>Service Tax </td><td><Stax c={this.state.price} /></td></tr>
          <tr><td>City Charge  </td><td><Ccharge d={this.state.price} /></td></tr>
          <tr><td>Total </td><td><Total e={this.state.price} /></td></tr>
        </table>
      </div>
    );
  }
}

class Bprice extends React.Component{
  render(){
    return(
      <div>
        {
          //this.state.bPrice=a.target.value,
          UtilCls.BasePrice(this.props.a)
        }
      </div>
    );
  }
}

class Rtax extends React.Component{
  render(){
    return(
      <div>
        {
          //this.state.rTax=b.target.value,
          UtilCls.RoadTax(this.props.b)
        }
      </div>
    );
  }
}

class Stax extends React.Component{
  render(){
    return(
      <div>
        {
          //this.state.sTax=c.target.value,
          UtilCls.ServiceTax(this.props.c)
        }
      </div>
    );
  }
}

class Ccharge extends React.Component{
  render(){
    return(
      <div>
        {
          //this.state.cCharge=d.target.value,
          UtilCls.CityCharge(this.props.d)
        }
      </div>
    );
  }
}

class Total extends React.Component{
  render(){
    return(
      <div>
        {
          UtilCls.TotalPrice(this.props.e)
        }
      </div>
    );
  }
}

export default Automobile;
