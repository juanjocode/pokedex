import React from 'react';
import PokeSeeker from '../PokeFind/PokeSeeker';
import PokeSlider from '../Slider/PokeSlider';
import PokeButton from '../Button/Button';
import PokeFilter from '../Filter/Filter';




import iconStrong from '../../img/icon-strongest.svg'
import iconWeakness from '../../img/icon-weakness.svg'
import iconLegendary from '../../img/icon-legendary.svg'
import iconReset from '../../img/icon-reset.svg'
import iconCollapse from '../../img/icon-collapse.svg'

const Menu = (props) => {
  const collapseMenu = () => {
    var menuToggle = document.querySelector('.menu');
    menuToggle.classList.toggle("collapse")
  };
  const expandMenu = () => {
    var menuToggle = document.querySelector('.menu');
    menuToggle.classList.remove("collapse")
  };
  return (


    <>
      <div className="menu collapse">
        <div className="menu__content">

          <PokeSeeker onChange={props.onChange} handleClick={expandMenu} tooltip="Search pokémon" />

          <PokeFilter />

          <PokeButton
            icon={iconStrong}
            title="Strongest"
            style={{ width: "100%" }}
            tooltip="Strongest"
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
          <PokeSlider handleData={props.handleData} />
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