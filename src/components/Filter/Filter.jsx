import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterImg from '../../img/icon-filter.svg';




export default function PokeFilter() {

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const expandMenu = () => {
        var menuToggle = document.querySelector('.menu');
        menuToggle.classList.remove("collapse")
    };

    return (
        <div className="pokefilter">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <button onClick={expandMenu}>    <img src={FilterImg} alt="filter" /> </button>
                    <Typography className="acordion__title">Filter</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                    acá va el contenido de esta joda
                     </div>
                </AccordionDetails>
            </Accordion>

        </div>
    );

}
