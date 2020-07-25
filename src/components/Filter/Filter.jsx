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



export default function PokeFilter() {

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const expandMenu = () => {
        var menuToggle = document.querySelector('.menu');
        menuToggle.classList.remove("collapse")
    };

    const typePokemon = {
        type: 'bug',
      }
      

    var colorType;

    const changeColor = () => {

      var checkBox = document.querySelector('.checkbox-type__input');
      var contIcon = document.querySelector('.checkbox-type__cont');

      if (checkBox.checked === true) {
        console.log("asdasdf")
        colorType = getColor(typePokemon.type)

        contIcon.setAttribute('style', `background: ${colorType}`)

        console.log(colorType)
      } else {
        contIcon.setAttribute('style', `background: var(--textGeneral)`)
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
                            <span>By type</span>

                            <div className="pokefilter__checks-continer">

                                <CheckBoxType tooltipCheck={typePokemon.type} handleClick={changeColor} icon={getType(typePokemon.type)}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.dark}/>
                                <CheckBoxType tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.dragon}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.electric}/>
                                <CheckBoxType tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.fairy}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.fight}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.fire}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.flying}/>
                                <CheckBoxType tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.ghost}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.grass}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.ground}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.ice}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.normal}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.poison}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.psychic}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.rock}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.steel}/>
                                <CheckBoxType  tooltipCheck={typePokemon.type} handleClick={changeColor} icon={images.water}/>
                                
                            
                            </div>

                        </div>
                    </AccordionDetails>
                </Accordion>

            </button>
        </div>
    );

}
