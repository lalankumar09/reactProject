import React    from "react";

class LiveData extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos').then((a) => a.json()).then(b => {this.setState({data : b})});
  }


  render() {
    return (
      <div>
        <table >
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>User ID</th>
            <th>Status</th>
          </tr>
          {this.state.data.map(b => <MyRow key={b.id} a={b} />)}
        </table>
      </div>
    );
  }
}

class MyRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.a.id}</td>
        <td>{this.props.a.title}</td>
        <td>{this.props.a.userId}</td>
        <td>{String(this.props.a.completed)}</td>
      </tr>
    );
  }
}

export default LiveData;
