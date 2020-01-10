import React    from "react";
import template from "./ContactUs.jsx";

class ContactUs extends React.Component {
  render() {
    return (
      <div align="center">
        <h2><b>Reach us to :</b></h2><hr/>
        <p> <i>Mahindra Comviva</i></p>
        <p>Capital Cyberscape,</p>
        <p>Sector 59,</p>
        <p>Gurugram, Haryana</p>
        <p><b>Email to : </b><a >mahindra@comviva.com</a></p>
        <p><b>Call at : </b>+91 0123456789</p>
      </div>
    );
  }
}

export default ContactUs;
