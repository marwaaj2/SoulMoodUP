import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './App.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: null,
   
    };
  }

  componentDidMount() {
    
    fetch('http://localhost:3001/pages/home') 
      .then((res => 
      
         res.json()
      ))
      .then(data => {
        this.setState({ homepage: data })
      })
      .catch(error => {
        this.setState({ error: 'Error fetching homepage data' });
        console.error('Error fetching homepage data:', error);
      });
  }

  render() {
    const { homepage } = this.state;

   if(!homepage){
    return <div>error...</div>
   }

    return (
      <div className="homepage">
        {homepage && (
          <>
            <div className="homepage-text">{homepage.title}</div>
            <div className="text-below">{homepage.text}</div>
            <Link to="/Service" className="button">
                {homepage.button}
            </Link> </> )} </div> );
  }
}

export default HomePage;



