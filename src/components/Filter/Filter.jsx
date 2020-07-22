import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';

export default class PokeFilter extends Component {

    render() {
        const { icon, title, link, className, classNameContainer, style, onClick, tooltip } = this.props;

        return (
            <Accordion>
                <a href={link} className={`${classNameContainer} button-tooltip`}>
                    <button style={style} className={`poke-button ${className}`} onClick={onClick}>
                        <Tooltip title={tooltip}  >
                            <img src={icon} alt={icon} />
                        </Tooltip>
                        <p>{title}</p>
                    </button>
                </a>
            </Accordion>
        );
    }
}




