import React    from "react";
import template from "./MyApp.jsx";

class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      uname: "",
      pwd: ""
    };

    this.onSub=this.onSub.bind(this);
    this.onCh1=this.onCh1.bind(this);
    this.onCh2=this.onCh2.bind(this);
  }

  onSub(e){
    alert(this.state.uname + " " + this.state.pwd);
    e.preventDefault();
  }

  onCh1(e){
    this.setState({uname: e.target.value});
  }

  onCh2(e){
    this.setState({pwd: e.target.value});
  }



  render() {
    return(
      <div>
        <form onSubmit={this.onSub}>
          <table className="table table-bordered">
            <tr><td>USERNAME</td><td><input type="text" name="uname" onChange={this.onCh1} /></td></tr>
            <tr><td>PASSWORD</td><td><input type="password" name="pwd" onChange={this.onCh2} /></td></tr>
            <tr><td><input className="btn btn-danger" type="submit" value="Login" /></td></tr>
            <td><input className="btn btn-info" type="reset" value="Cancel" /></td>
          </table>
        </form>
      </div>
    );
  }
}

export default MyApp;
