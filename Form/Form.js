import React    from "react";
import template from "./Form.jsx";

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      name: "",
      email: "",
      phone: "",
      city: "",
      country: ""
    };

  }

  nchange(e){
    this.setState({name:e.target.value})
  }
  echange(e){
    this.setState({email:e.target.value})
  }

  pchange(e){
    this.setState({phone:e.target.value})
  }

  cchange(e){
    this.setState({city:e.target.value})
  }

  ctchange(e){
    this.setState({country:e.target.value})
  }

  onsub(e){
      fetch('http://localhost:8080/ins/'+this.state.name+'/'+this.state.email+'/'+this.state.phone+'/'
      +this.state.city+'/'+this.state.country).then((a)=>a.json()).then(b=>console.log(b));

      e.preventDefault();
  }

  render() {
    return(
      <div>
        
      </div>
    );
  }
}

export default Form;
