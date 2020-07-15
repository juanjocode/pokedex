import React from 'react';
import BinocularsImg from '../img/binoculares.png';
import '../css/binoculars.scss';



class Binoculars extends React.Component {
  render() {
    return(
      <div className="Binoculars">
        <img src={ BinocularsImg } alt="Binoculars img" />
      </div>
    )
  }
}

export default Binoculars;