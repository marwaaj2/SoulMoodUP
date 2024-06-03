import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      logoUrl: ''
    };
  }

  componentDidMount() {
    // Fetch menu data
    fetch('http://localhost:3001/menus/11') // Adjust the endpoint URL as needed
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Find logo URL move it to the index
        const logoText = data.find(menu => menu.name === "logo");
        const logoUrl = logoText?.url; 

        this.setState({ menuItems: data , logoUrl: logoUrl});
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
      });
  }


  render() {
    const { menuItems, logoUrl } = this.state;

    return (
      <div className="header-menu">
        <div className="logo">
          <a href={logoUrl}>
            <img src={logo} alt="Logo" style={{ width: 220, height: 50, maxWidth: '100%' }} /> </a> </div>
        <nav>
          <ul>
            {menuItems.map(item => (
              <li key={item.menuId}>
                <a href={item.url}>{item.text}</a>
              </li> ))} </ul> </nav> </div> );
         
  }
}

export default HeaderMenu;
