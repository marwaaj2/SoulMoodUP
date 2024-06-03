import React, { Component } from 'react';
import './App.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactUsPage: null,
      forms: null,
    };
  }

  componentDidMount() {
    // Fetch pagesData
    fetch('http://localhost:3001/forms/ContactUs') // Adjust the endpoint URL as needed
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contactUsPage: data.pageData, forms: data.forms });
      });
  }

  render() {
    const { contactUsPage, forms } = this.state;
    if (!contactUsPage || !forms) {
      return <div>error</div>;
    }

    return (
      <div className='contactUs'>
        <div className='contactUsPage'>
          <form className="formCS">
            <h2>{contactUsPage.pageId}</h2>
            {forms.fields.map((field, index) => (
              <div key={index}>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder} /> )} </div> ))}
            
            {forms.buttons.map((button, index) => (
              <a key={index} href={button.url} className="contactUs-button"> 
                {button.label} </a> ))} </form> </div> </div> );
             
  }
}

export default ContactUs;

