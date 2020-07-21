import React from 'react';
import PokeSeeker from '../PokeSeeker';
import Pokeslider from '../Slider/PokeSlider';
import PokeButton from '../Button/Button'
import iconStrong from '../../img/icon-strongest.svg'
import iconWeakness from '../../img/icon-weakness.svg'
import iconLegendary from '../../img/icon-legendary.svg'
import iconReset from '../../img/icon-reset.svg'
import iconCollapse from '../../img/icon-collapse.svg'

const Menu = () => {
  return (

    <>
      <div className="menu extended">


        <PokeSeeker />
        <PokeButton
          icon={iconStrong}
          title="Stronguest"
          link="/index/cards"
          style={{width:"100%"}}
          className=""
        />
        <PokeButton
          icon={iconWeakness}
          title="Weakness"
          link="/index/cards"
           style={{width:"100%"}}
          className=""
        />
        <PokeButton
          icon={iconLegendary}
          title="Legendaries"
          link="/index/cards"
           style={{width:"100%"}}
          className=""
        />
        <PokeButton
          icon={iconReset}
          title="Reset / All"
          link="/index/cards"
           style={{width:"100%"}}
          className=""
        />
        <Pokeslider />
        
        <PokeButton
          icon={iconCollapse}
          title="Reset / All"
          link="/index/cards"
          className=""
        />



      </div>
    </>

  );
};

export default Menu;