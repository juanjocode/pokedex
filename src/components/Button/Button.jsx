import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';


const MyTooltip = ({title, children}) =>{
    if (title === undefined) {
        return children;
    }

    return (
    <Tooltip title={title}>
        {children}
    </Tooltip>
    )
}

export default class PokeButton extends Component {



    render() {
        const { icon, title, link, className, classNameContainer, style, onClick, tooltip } = this.props;
        return (
            <a href={link} className={`${classNameContainer} button-tooltip`}>

                <button style={style} className={`poke-button ${className}`} onClick={onClick}>
                    <MyTooltip title={tooltip}  >
                        <img src={icon} alt={icon} />
                    </MyTooltip>
                    <p>{title}</p>
                </button>
            </a>
        );
    }
}




