import React from 'react';
import PokeSeeker from '../PokeFind/PokeSeeker';
import SliderAttack from '../SliderAttack/SliderAttack';
import SliderDefense from '../SliderDefense/SliderDefense';
import PokeButton from '../Button/Button';
import PokeFilter from '../Filter/Filter';


import iconStrong from '../../img/icon-strongest.svg'
import iconWeakness from '../../img/icon-weakness.svg'
import iconLegendary from '../../img/icon-legendary.svg'
import iconReset from '../../img/icon-reset.svg'
import iconCollapse from '../../img/icon-collapse.svg'
import SliderProbabilidadLegendario from '../SliderProbabilidadLegendario/SliderProbabilidadLegendario';


const AlternativeMenu = (props) => {
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
      <div className="menu">
        <div className="menu__content">

          <PokeSeeker onChange={props.onChange} handleClick={expandMenu} tooltip="Search pokémon" />
          <PokeFilter />

          <PokeButton
            icon={iconStrong}
            title="Strongest"
            style={{ width: "100%" }}
            tooltip="Strongest"
            link="/index/strong"
          />
          <PokeButton
            icon={iconWeakness}
            title="Weakness"
            tooltip="Weakness"
            style={{ width: "100%" }}
            link="/index/weakness"
          />
          <PokeButton
            icon={iconLegendary}
            title="Legendaries"
            tooltip="Legendaries"
            style={{ width: "100%" }}
            link="/index/legendaries"

          />
          <PokeButton
            icon={iconReset}
            title="Reset / All"
            tooltip="Reset / All"
            link="/index/cards"
            style={{ width: "100%" }}
            onClick={() => props.onChange("")}
          />
          {/* {console.log(props.handleData, "Menu")} */}
          <SliderAttack handleData={props.handleData}/>
          <SliderDefense handleChangeDefense={props.handleChangeDefense}/>
          <SliderProbabilidadLegendario handleChangeProb={props.handleChangeProb}/>
          
        </div>

        <PokeButton
          icon={iconCollapse}
          title="Collapse"
          tooltip="Collapse"
          className="button-collapse"
          classNameContainer="button-collapse__container"
          onClick={collapseMenu}
          // link="/index/cards"
        />
      </div>



    </>

  );
};

export default AlternativeMenu;