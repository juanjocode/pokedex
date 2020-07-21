import React from 'react';
import PokeSeeker from '../components/PokeSeeker';
import PokeSlider from '../components/Slider/PokeSlider';
import Navbar from '../components/Navbar/Navbar'
// import Menu from '../../src/components/Menu/Menu';
// import PokeAttack from '../components/PokeAttack';

class PokeCards extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Menu /> */}
        {/* <cardView /> */}
        <PokeSeeker />
        <PokeSlider />
        
      </div>
    )
  }
}

export default PokeCards;