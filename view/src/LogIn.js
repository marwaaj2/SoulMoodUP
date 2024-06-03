import React, { Component } from 'react';
import './App.css'; // Import specific CSS file for Log In component

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginpage: null,
      forms: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/forms/LogIn')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ loginpage: data.pageData, forms: data.forms });
      });
  }

  render() {
    const { loginpage, forms } = this.state;
    if (!loginpage || !forms) {
      return <div>error...</div>;
    }

    return (
      <div className="logIn">
        <div className="logIn-form">
          <form>
            <h2 className="logIn-title">{forms.textL}</h2>
            {forms.fields.map((field, index) => (
              <div className="logIn-input-container" key={index}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="logIn-input"
                />
              </div>
            ))}
            <div className="logIn-forgetpass">
              <a href={forms.forgetPassUrl || "#"}>{forms.text}</a>
            </div>
            <button type="submit" className="logIn-login-button">
              {forms.button}
            </button>
            <br />
            <br />
            <p className="logIn-text1">{forms.text1}</p>
            <div className="logIn-googleB-centered">
              <a href={forms.buttonUrl1 || "#"} className="logIn-google-button">
                {forms.button1}
              </a>
            </div>
            <div className="logIn-bottom-createA">
              <p>
                {forms.text2} <a href={forms.text3Url || "#"}>{forms.text3}</a> </p> </div> </form> </div> </div>
            
    );
  }
}

export default LogIn;
