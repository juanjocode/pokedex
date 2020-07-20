import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class PokeButton extends Component {

    render() {
        const { icon, title, link, className, style } = this.props;
        return (
            <a href={link}>
                <button style={{style}} className={`poke-button ${className}`} >
                    <img src={icon} alt={icon} />
                    <p>{title}</p>
                </button>
            </a>
        );
    }
}




