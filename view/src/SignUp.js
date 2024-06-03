import React, { Component } from 'react';
import './App.css'; 

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupPage: null,
      forms: null,
    };
  }

  componentDidMount() {
    // Fetch form data from the server
    fetch('http://localhost:3001/forms/SignUp') // Adjust the endpoint URL as needed
      .then(res => res.json())
      .then(data => {
        this.setState({ signupPage: data.pageData, forms: data.forms });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { forms, signupPage } = this.state;
    if (!forms || !signupPage) {
      return <div>Loading...</div>;
    }

    return (
      <div className="signUp-container">
        {/* Right side (now the whole form container) */}
        <div className="signUp-right-side">
          <div className="signUp-form-container">
            <h2 className="signUp-form-title">{forms.pageId}</h2>
            {forms.fields.map((item, index) => (
              <div className="signUp-input-group" key={index}>
                <input
                  className="signUp-input"
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              </div>
            ))}
            <button className="signUp-button" type={forms.buttons[0].type}>
              {forms.buttons[0].label}
            </button><br /><br />
            <div className="signUp-or-text">{forms.text}{' '}
              <a href={forms.buttons[1].url}>
                {forms.buttons[1].label}
              </a>
            </div>
            <div className="signUp-or-text">{forms.text1}</div>
            <div className="signUp-social-buttons">
              {forms.socialMediaIcons.map((icon, index) => (
                <button className="signUp-social-button" key={index}>
                  <a href={icon.iconTextUrl}>
                    {icon.iconText}
                  </a> </button> ))} </div> </div> </div> </div> );
             
  }
}

export default SignUp;
