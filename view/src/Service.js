import React, { Component } from 'react';
import './App.css';
import servicePic from './images/serviceFImg.jpeg';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicePage: null,
    };
  }

  componentDidMount() {
    
    fetch('http://localhost:3001/pages/Service') 
      .then((res => res.json()))
      .then(data => {
        this.setState({ servicePage: data });
      });
  }

  render() {
    const { servicePage } = this.state;
    if (!servicePage) {
      return <div>error...</div>;
    }

    return (
      <div className="service-page-container">
        <div className="service-container">
          <div className="service-left-side">
            <h1 className="service-heading">{servicePage.title}</h1>
            <p className="service-sub-heading">{servicePage.textTitle}</p>
            <div className="service-input-field">
              <label htmlFor="upload-input" className="custom-file-upload">
                <input
                  type={servicePage.field[0].type}
                  className="service-text-input"
                  id="upload-input"
                  placeholder={servicePage.field[0].placeholder}
                />
                {servicePage.field[0].placeholder}
              </label>
              <a href={servicePage.buttons[0].url} className="service-button">
                {servicePage.buttons[0].name}
              </a>
            </div>
            <p className="service-start-journey">
              {servicePage.iconText} <i className="fa-solid fa-arrow-up"></i>
            </p>
            <p className="service-textB">{servicePage.textBa}</p>
          </div>
          <div className="service-right-side">
            <img src={servicePic} className="service-nice-photo" alt="Service" />
          </div>
        </div>
        <div className="service-popular-album">
          <h2 className="service-section-title">{servicePage.titleAlbum}</h2>
          {[0, 1, 2, 3, 4].map((index) => (
            <img key={index} src={servicePage.images[index][`popAlb${index + 1}Img`]} alt={`Album ${index + 1}`} />
          ))}
        </div>
        <div className="service-popular-meditation">
          <h2 className="service-section-title">{servicePage.titleMid}</h2>
          {[5, 6, 7, 8, 9].map((index) => (
            <img key={index - 5} src={servicePage.images[index][`popMid${index - 4}Img`]} alt={`Meditation ${index - 4}`} />
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="service-how-to-use">
          <h2 className="service-section-title">{servicePage.titleHTU}</h2>
          <ul className="service-instructions">
            {servicePage.pList.map((item, index) => (
              <li key={index}>{item.context}</li>
            ))}
          </ul>
        </div>
        <div className="service-additional-text">
          <p>{servicePage.studiesTitle}</p>
        </div>
        <div className="service-article-links">
          <h2 className="service-section-title">{servicePage.textArtR}</h2>
          <ul className="service-links">
            {servicePage.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a> </li>))} </ul> </div> </div> );
           
    
  }
}

export default Service;
