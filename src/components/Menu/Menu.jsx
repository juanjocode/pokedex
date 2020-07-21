import React from 'react';
import PokeSeeker from '../PokeSeeker';
import Pokeslider from '../Slider/PokeSlider';
import PokeButton from '../Button/Button'
import iconStrong from '../../img/icon-strongest.svg'
import iconWeakness from '../../img/icon-weakness.svg'
import iconLegendary from '../../img/icon-legendary.svg'
import iconReset from '../../img/icon-reset.svg'

const Menu = () => {
  return (

    <>
      <div className="menu extended">


        <PokeSeeker />
        <PokeButton
          icon={iconStrong}
          title="Stronguest"
          link="/index/cards"
          className=""
        />
        <PokeButton
          icon={iconWeakness}
          title="Weakness"
          link="/index/cards"
          className=""
        />
        <PokeButton
          icon={iconLegendary}
          title="Legendaries"
          link="/index/cards"
          className=""
        />
        <PokeButton
          icon={iconReset}
          title="Reset / All"
          link="/index/cards"
          className=""
        />
        
        <PokeButton
          icon={iconReset}
          title="Reset / All"
          link="/index/cards"
          className=""
        />

        <Pokeslider />


      </div>
    </>

  );
};

export default Menu;