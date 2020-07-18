import React from 'react';
import PokeSeeker from '../components/PokeSeeker';
import PokeSlider from '../components/PokeSlider'
// import PokeAttack from '../components/PokeAttack';

class PokeCards extends React.Component {
  render() {
    return (
      <div>
        <PokeSeeker />
        <PokeSlider />
      </div>
    )
  }
}

export default PokeCards;