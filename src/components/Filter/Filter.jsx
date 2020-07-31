import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterImg from '../../img/icon-filter.svg';
import CheckBoxType from '../CheckBoxType/CheckBoxType'
import images, { getType } from '../../img/images';
import { getColor } from '../../styles/gradients';
import { getColor2 } from '../../styles/gradients';
import SliderAttack from '../SliderAttack/SliderAttack';
import SliderDefense from '../SliderDefense/SliderDefense';
import SliderProbabilidadLegendario from '../SliderProbabilidadLegendario/SliderProbabilidadLegendario';

let contBug = 0;
let contDark = 0;
let contDragon = 0;
let contElectric = 0;
let contFairy = 0;
let contFight = 0;
let contFire = 0;
let contFlying = 0;
let contGhost = 0;
let contGrass = 0;
let contGround = 0;
let contIce = 0;
let contNormal = 0;
let contPoison = 0;
let contPsychic = 0;
let contRock = 0;
let contSteel = 0;
let contWater = 0;

const PokeFilter = (props) => {

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const expandMenu = () => {
        var menuToggle = document.querySelector('.menu');
        menuToggle.classList.remove("collapse")
    };

    const typePokemon = {
        default: 'default',
        bug: 'bug',
        dark: 'dark',
        dragon: 'dragon',
        electric: 'electric',
        fairy: 'fairy',
        fight: 'fight',
        fire: 'fire',
        flying: 'flying',
        ghost: 'ghost',
        grass: 'grass',
        ground: 'ground',
        ice: 'ice',
        normal: 'normal',
        poison: 'poison',
        psychic: 'psychic',
        rock: 'rock',
        steel: 'steel',
        water: 'water'
      }
      

    var colorType;
    var colorType2 = getColor(typePokemon.default)
    
    colorType = getColor(typePokemon.dark)

    // const changeColor = (e) => {

    //   var checkBox = document.querySelector('.checkbox-type__input');
    //   var contIcon = document.querySelector('.checkbox-type__cont');
      
    //   console.log(checkBox.checked)

    //   console.log(props.handleIconBug)

    //   if (checkBox.checked === true) {

    //     colorType = getColor(typePokemon.bug)

    //     contIcon.setAttribute('style', `background: ${colorType}`)
    //     contIcon.setAttribute('style', `background: var(--colorBug)`)

    //     console.log(colorType)
    //   } else {
    //     contIcon.setAttribute('style', `background: var(--textGeneral)`)
    //   }
    // };

    const changeColorBug = () => {
        colorType = getColor(typePokemon.bug)
        let result = contBug % 2;
        if(result === 0) {
            document.getElementById('bug').style.background = colorType
            return(contBug = contBug + 1)
        } else {
            document.getElementById('bug').style.background = colorType2
            return(contBug = contBug + 1)
        }
    };

    const changeColorDark = () => {
        colorType = getColor(typePokemon.dark)
        let result = contDark % 2;
        if(result === 0) {
            document.getElementById('dark').style.background = colorType
            return(contDark = contDark + 1)
        } else {
            document.getElementById('dark').style.background = colorType2
            return(contDark = contDark + 1)
        }
    };

    const changeColorDragon = () => {
        colorType = getColor(typePokemon.dragon)
        let result = contDragon % 2;
        if(result === 0) {
            document.getElementById('dragon').style.background = colorType
            return(contDragon = contDragon + 1)
        } else {
            document.getElementById('dragon').style.background = colorType2
            return(contDragon = contDragon + 1)
        }
    };

    const changeColorElectric = () => {
        colorType = getColor(typePokemon.electric)
        let result = contElectric % 2;
        if(result === 0) {
            document.getElementById('electric').style.background = colorType
            return(contElectric = contElectric + 1)
        } else {
            document.getElementById('electric').style.background = colorType2
            return(contElectric = contElectric + 1)
        }
    };

    const changeColorFairy = () => {
        colorType = getColor(typePokemon.fairy)
        let result = contFairy % 2;
        if(result === 0) {
            document.getElementById('fairy').style.background = colorType
            return(contFairy = contFairy + 1)
        } else {
            document.getElementById('fairy').style.background = colorType2
            return(contFairy = contFairy + 1)
        }
    };

    const changeColorFight = () => {
        colorType = getColor(typePokemon.fight)
        let result = contFight % 2;
        if(result === 0) {
            document.getElementById('fight').style.background = colorType
            return(contFight = contFight + 1)
        } else {
            document.getElementById('fight').style.background = colorType2
            return(contFight = contFight + 1)
        }
    };

    const changeColorFire = () => {
        colorType = getColor(typePokemon.fire)
        let result = contFire % 2;
        if(result === 0) {
            document.getElementById('fire').style.background = colorType
            return(contFire = contFire + 1)
        } else {
            document.getElementById('fire').style.background = colorType2
            return(contFire = contFire + 1)
        }
    };

    const changeColorFlying = () => {
        colorType = getColor(typePokemon.flying)
        let result = contFlying % 2;
        if(result === 0) {
            document.getElementById('flying').style.background = colorType
            return(contFlying = contFlying + 1)
        } else {
            document.getElementById('flying').style.background = colorType2
            return(contFlying = contFlying + 1)
        }
    };

    const changeColorGhost = () => {
        colorType = getColor(typePokemon.ghost)
        let result = contGhost % 2;
        if(result === 0) {
            document.getElementById('ghost').style.background = colorType
            return(contGhost = contGhost + 1)
        } else {
            document.getElementById('ghost').style.background = colorType2
            return(contGhost = contGhost + 1)
        }
    };

    const changeColorGrass = () => {
        colorType = getColor(typePokemon.grass)
        let result = contGrass % 2;
        if(result === 0) {
            document.getElementById('grass').style.background = colorType
            return(contGrass = contGrass + 1)
        } else {
            document.getElementById('grass').style.background = colorType2
            return(contGrass = contGrass + 1)
        }
    };

    const changeColorGround = () => {
        colorType = getColor(typePokemon.ground)
        let result = contGround % 2;
        if(result === 0) {
            document.getElementById('ground').style.background = colorType
            return(contGround = contGround + 1)
        } else {
            document.getElementById('ground').style.background = colorType2
            return(contGround = contGround + 1)
        }
    };

    const changeColorIce = () => {
        colorType = getColor(typePokemon.ice)
        let result = contIce % 2;
        if(result === 0) {
            document.getElementById('ice').style.background = colorType
            return(contIce = contIce + 1)
        } else {
            document.getElementById('ice').style.background = colorType2
            return(contIce = contIce + 1)
        }
    };

    const changeColorNormal = () => {
        colorType = getColor(typePokemon.normal)
        let result = contNormal % 2;
        if(result === 0) {
            document.getElementById('normal').style.background = colorType
            return(contNormal = contNormal + 1)
        } else {
            document.getElementById('normal').style.background = colorType2
            return(contNormal = contNormal + 1)
        }
    };

    const changeColorPoison = () => {
        colorType = getColor(typePokemon.poison)
        let result = contPoison % 2;
        if(result === 0) {
            document.getElementById('poison').style.background = colorType
            return(contPoison = contPoison + 1)
        } else {
            document.getElementById('poison').style.background = colorType2
            return(contPoison = contPoison + 1)
        }
    };

    const changeColorPsychic = () => {
        colorType = getColor(typePokemon.psychic)
        let result = contPsychic % 2;
        if(result === 0) {
            document.getElementById('psychic').style.background = colorType
            return(contPsychic = contPsychic + 1)
        } else {
            document.getElementById('psychic').style.background = colorType2
            return(contPsychic = contPsychic + 1)
        }
    };

    const changeColorRock = () => {
        colorType = getColor(typePokemon.rock)
        let result = contRock % 2;
        if(result === 0) {
            document.getElementById('rock').style.background = colorType
            return(contRock = contRock + 1)
        } else {
            document.getElementById('rock').style.background = colorType2
            return(contRock = contRock + 1)
        }
    };

    const changeColorSteel = () => {
        colorType = getColor(typePokemon.steel)
        let result = contSteel % 2;
        if(result === 0) {
            document.getElementById('steel').style.background = colorType
            return(contSteel = contSteel + 1)
        } else {
            document.getElementById('steel').style.background = colorType2
            return(contSteel = contSteel + 1)
        }
    };

    const changeColorWater = () => {
        colorType = getColor(typePokemon.water)
        let result = contWater % 2;
        if(result === 0) {
            document.getElementById('water').style.background = colorType
            return(contWater = contWater + 1)
        } else {
            document.getElementById('water').style.background = colorType2
            return(contWater = contWater + 1)
        }
    };

    return (
        <div className="pokefilter">
            <button onClick={expandMenu}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <img src={FilterImg} alt="filter" />
                        <Typography className="acordion__title">Filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="pokefilter__content">
                            <span className="pokefilter__title-types">By type</span>

                            <div className="pokefilter__checks-continer">

{/* <CheckBoxType tooltipCheck={typePokemon.bug} handleClick={() => props.handleIconBug(1)} icon={getType(typePokemon.type)}/> */}
<CheckBoxType idImg={"bug"} tooltipCheck={typePokemon.bug} handleClick={() => {props.handleIconBug(1); changeColorBug()}} icon={images.bug}/>
<CheckBoxType idImg={"dark"} tooltipCheck={typePokemon.dark} handleClick={() => {props.handleIconDark(1); changeColorDark()}} icon={images.dark}/>
<CheckBoxType idImg={"dragon"} tooltipCheck={typePokemon.dragon} handleClick={() => {props.handleIconDragon(1); changeColorDragon()}} icon={images.dragon}/>
<CheckBoxType idImg={"electric"} tooltipCheck={typePokemon.electric} handleClick={() => {props.handleIconElectric(1); changeColorElectric()}} icon={images.electric}/>
<CheckBoxType idImg={"fairy"} tooltipCheck={typePokemon.fairy} handleClick={() => {props.handleIconFairy(1); changeColorFairy()}} icon={images.fairy}/>
<CheckBoxType idImg={"fight"} tooltipCheck={typePokemon.fight} handleClick={() => {props.handleIconFight(1); changeColorFight()}} icon={images.fight}/>
<CheckBoxType idImg={"fire"} tooltipCheck={typePokemon.fire} handleClick={() => {props.handleIconFire(1); changeColorFire()}} icon={images.fire}/>
<CheckBoxType idImg={"flying"} tooltipCheck={typePokemon.flying} handleClick={() => {props.handleIconFlying(1); changeColorFlying()}} icon={images.flying}/>
<CheckBoxType idImg={"ghost"} tooltipCheck={typePokemon.ghost} handleClick={() => {props.handleIconGhost(1); changeColorGhost()}} icon={images.ghost}/>
<CheckBoxType idImg={"grass"} tooltipCheck={typePokemon.grass} handleClick={() => {props.handleIconGrass(1); changeColorGrass()}} icon={images.grass}/>
<CheckBoxType idImg={"ground"} tooltipCheck={typePokemon.ground} handleClick={() => {props.handleIconGround(1); changeColorGround()}} icon={images.ground}/>
<CheckBoxType idImg={"ice"} tooltipCheck={typePokemon.ice} handleClick={() => {props.handleIconIce(1); changeColorIce()}} icon={images.ice}/>
<CheckBoxType idImg={"normal"} tooltipCheck={typePokemon.normal} handleClick={() => {props.handleIconNormal(1); changeColorNormal()}} icon={images.normal}/>
<CheckBoxType idImg={"poison"} tooltipCheck={typePokemon.poison} handleClick={() => {props.handleIconPoison(1); changeColorPoison()}} icon={images.poison}/>
<CheckBoxType idImg={"psychic"} tooltipCheck={typePokemon.psychic} handleClick={() => {props.handleIconPsychic(1); changeColorPsychic()}} icon={images.psychic}/>
<CheckBoxType idImg={"rock"} tooltipCheck={typePokemon.rock} handleClick={() => {props.handleIconRock(1); changeColorRock()}} icon={images.rock}/>
<CheckBoxType idImg={"steel"} tooltipCheck={typePokemon.steel} handleClick={() => {props.handleIconSteel(1); changeColorSteel()}} icon={images.steel}/>
<CheckBoxType idImg={"water"} tooltipCheck={typePokemon.water} handleClick={() => {props.handleIconWater(1); changeColorWater()}} icon={images.water}/>
                                
                                  
                            </div>
                            <SliderAttack handleData={props.handleData}/>
                            <SliderDefense handleChangeDefense={props.handleChangeDefense}/>
                            <SliderProbabilidadLegendario handleChangeProb={props.handleChangeProb}/>
                        </div>
                        
                    </AccordionDetails>

                </Accordion>
                
            </button>
            
        </div>
    );

}


export default PokeFilter;