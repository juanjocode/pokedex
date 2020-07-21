import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default class PokeButton extends Component {

    render() {
        const { icon, title, link, className, classNameContainer, style, onClick, tooltip } = this.props;

        console.log("TTOOOLLLLLL  " + tooltip);

    //    if (tooltip === undefined) {
    //     //    alert('¿cosa')
    //     document.getElementsByClassName('MuiTooltip-tooltip').style.color = 'blue';
           
    //    }


        return (
            <a href={link} className={`${classNameContainer} button-tooltip`}>

                
                    <button style={style} className={`poke-button ${className}`} onClick={onClick}>
                    <Tooltip title={tooltip}  >
                        <img src={icon} alt={icon} />
                </Tooltip>
                        <p>{title}</p>
                    </button>
            </a>
        );
    }
}




