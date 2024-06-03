import React, { Component } from 'react';
import './App.css';

class FooterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    };
  }

  componentDidMount() {
    // Fetch menu data
    fetch('http://localhost:3001/menus/12') // Adjust the endpoint URL as needed
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Check if data is an array before updating state
        if (!Array.isArray(data)) {
          throw new Error('Data received is not an array');
        }
        this.setState({ menuItems: data });
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
        // Optionally, you can set state to indicate error
        this.setState({ error: error.message });
      });
  }


  render() {
    const { menuItems } = this.state;

    return (
      <div className="footer-menu">
        <nav>
          <ul className="footer-menu-items">
            {menuItems.map(item => (
              <li key={item.menuId}>
                <a href={item.url}>{item.text}</a>
              </li> ))} </ul> </nav>
        <ul className="social-media-icons">
          <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
        </ul> </div> );
  }
}

export default FooterMenu;
