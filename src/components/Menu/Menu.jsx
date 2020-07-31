import React from 'react';
import PokeSeeker from '../PokeFind/PokeSeeker';
import PokeButton from '../Button/Button';
import PokeFilter from '../Filter/Filter';
import iconStrong from '../../img/icon-strongest.svg'
import iconWeakness from '../../img/icon-weakness.svg'
import iconLegendary from '../../img/icon-legendary.svg'
import iconReset from '../../img/icon-reset.svg'
import iconCollapse from '../../img/icon-collapse.svg'
import { EmptyPokemons } from '../../Action/PokemonAction';
import { connect } from 'react-redux';



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
          <PokeFilter handleIconBug={props.handleIconBug} handleIconDark={props.handleIconDark} handleIconDragon={props.handleIconDragon} handleIconElectric={props.handleIconElectric} handleIconFairy={props.handleIconFairy} handleIconFight={props.handleIconFight} handleIconFire={props.handleIconFire} handleIconFlying={props.handleIconFlying} handleIconGhost={props.handleIconGhost} handleIconGrass={props.handleIconGrass} handleIconGround={props.handleIconGround} handleIconIce={props.handleIconIce} handleIconNormal={props.handleIconNormal} handleIconPoison={props.handleIconPoison} handleIconPsychic={props.handleIconPsychic} handleIconRock={props.handleIconRock} handleIconSteel={props.handleIconSteel} handleIconWater={props.handleIconWater} handleData={props.handleData} handleChangeDefense={props.handleChangeDefense} handleChangeProb={props.handleChangeProb}/>

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
            onClick={() => props.EmptyPokemons()}
            // onClick={() => props.onChange("")}
          />
          
        </div>

        <PokeButton
          icon={iconCollapse}
          title="Collapse"
          tooltip="Collapse"
          className="button-collapse"
          classNameContainer="button-collapse__container"
          onClick={collapseMenu}
          link="/index/cards"
        />
      </div>



    </>

  );
};


const mapDispatchToProps = { EmptyPokemons }

export default connect(null , mapDispatchToProps)(Menu);

// export default Menu;