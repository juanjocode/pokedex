import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';


const MyTooltip = ({ title, children }) => {
    if (title === undefined) {
        return children;
    }

    return (
        <Tooltip title={title}>
            {children}
        </Tooltip>
    )
}

export default class Pokecheck extends Component {



    render() {
        const { icon, title, link, className, classNameContainer, style, onClick, tooltip } = this.props;
        return (
            <div>
            </div>
        );
    }
}




