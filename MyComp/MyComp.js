import React, {Component} from 'react';

var arr = [
  {
    "id" : 1,
    "name" : "aman",
    "email" : "aman@gmail"
  },
  {
    "id" : 2,
    "name" : "rohit",
    "email" : "rohit@gmail"
  },
  {
    "id" : 3,
    "name" : "haardik",
    "email" : "haardik@gmail"
  },
  {
    "id" : 4,
    "name" : "sandeep",
    "email" : "sandeep@gmail"
  },
  {
    "id" : 5,
    "name" : "saliq",
    "email" : "saliq@gmail"
  }
];

export class MyComp extends React.Component{
  
  render(){
    return(
      <div class="alert alert-success">
        
        
          {
            arr.map(a => <MyRow key={a.id} data={a} />)
          }
       
      </div>
    );
  }
}



class MyRow extends React.Component{
  render(){
    return(
      // <tr>
      //   <td>{this.props.data.id}</td>
      //   <td>{this.props.data.name}</td>
      //   <td>{this.props.data.email}</td>
      // </tr>

      <div class="card-deck">
        <div class="card bg-primary">
          <div class="card-body text-center">
            <p class="card-text">{this.props.data.id}</p>
            <p class="card-text">{this.props.data.name}</p>
            <p class="card-text">{this.props.data.email}</p>
            <p class="card-text"><a href="email@com">Mail me</a></p>
          </div>
        </div><hr />
      </div> 
    );
  }
}

export default MyComp;
