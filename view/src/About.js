import React, { Component } from 'react';
import './App.css'; 

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutPage: null
    };
  }

  componentDidMount() {
    
   
    fetch('http://localhost:3001/pages/About') 
      .then((res) => 
        
        res.json()
)
      .then(pages => {
        this.setState({ aboutPage: pages });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { aboutPage } = this.state;
    if(!aboutPage){
      return <div>error...</div>
    }

    return (
      <div className="about">
        <div className="about-content">
          {aboutPage && (
            <>
              <div className="about-title">{aboutPage.title}</div>
              <p>{aboutPage.text}</p> 
              <a href="/Service" className="start-journey-link">Let's Start the Journey</a></> )} </div> </div> );
  }
}

export default About;
