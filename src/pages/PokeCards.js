import React from 'react';
import PokeSeeker from '../components/PokeSeeker';
import PokeSlider from '../components/Slider/PokeSlider'
// import Menu from '../../src/components/Menu/Menu';
// import PokeAttack from '../components/PokeAttack';

class PokeCards extends React.Component {
  render() {
    return (
      <div>
        {/* <navBar /> */}
        {/* <Menu /> */}
        {/* <cardView /> */}
        <PokeSeeker />
        <PokeSlider />
        
      </div>
    )
  }
}

export default PokeCards;