import React from 'react';
import PokeSeeker from '../components/PokeSeeker';
import PokeAttack from '../components/PokeAttack';

class PokeCards extends React.Component {
  render() {
    return (
      <div>
        <PokeSeeker />
        <PokeAttack />
      </div>
    )
  }
}

export default PokeCards;