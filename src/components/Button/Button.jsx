import React, { Component } from 'react';

export default class PokeButton extends Component {

    render() {
        const { icon, title, link, className, classNameContainer, style, onClick } = this.props;
        return (
            <a href={link} className={classNameContainer}>
                <button style={style} className={`poke-button ${className}`} onClick={onClick}>
                    <img src={icon} alt={icon} />
                    <p>{title}</p>
                </button>
            </a>
        );
    }
}




