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
  const collapseMenu = () => {
    var menuToggle = document.querySelector('.menu');
    menuToggle.classList.toggle("collapse")
  };
  return (


    <>
      <div className="menu collapse">
        <div className="menu__content">
          <PokeSeeker />

            <PokeButton
              icon={iconStrong}
              title="Stronguest"
              style={{ width: "100%" }}
              tooltip="Stronguest"
            />
      

          <PokeButton
            icon={iconWeakness}
            title="Weakness"
            tooltip="Weakness"
            style={{ width: "100%" }}
          />
          <PokeButton
            icon={iconLegendary}
            title="Legendaries"
            tooltip="Legendaries"
            style={{ width: "100%" }}
          />
          <PokeButton
            icon={iconReset}
            title="Reset / All"
            tooltip="Reset / All"
            style={{ width: "100%" }}
          />
          {/* <Pokeslider /> */}
        </div>

        <PokeButton
          icon={iconCollapse}
          title="Collapse"
          tooltip="Collapse"
          className="button-collapse"
          classNameContainer="button-collapse__container"
          onClick={collapseMenu}
        />
      </div>



    </>

  );
};

export default Menu;