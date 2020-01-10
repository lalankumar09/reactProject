import React    from "react";
import template from "./LogIn.jsx";

class LogIn extends React.Component {
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

export default LogIn;
