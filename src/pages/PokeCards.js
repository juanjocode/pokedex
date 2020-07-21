import React from 'react';
import PokeSeeker from '../components/PokeSeeker';
import PokeSlider from '../components/Slider/PokeSlider';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import images from '../img/images';
import bug from '../img/types/bug.svg';
// import Menu from '../../src/components/Menu/Menu';
// import PokeAttack from '../components/PokeAttack';

class PokeCards extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Menu />
        <div style={{ background: "black", padding:"20px" }}>
          <img src={images.bug} />
          <img src={bug} />
        </div>
        {/* <cardView /> */}
        {/* <PokeSeeker /> */}
        {/* <PokeSlider /> */}

      </div>
    )
  }
}

export default PokeCards;