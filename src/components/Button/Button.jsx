import React, { Component } from 'react';

export default class PokeButton extends Component {

    render() {
        const { icon, title, link, className, style, onClick } = this.props;
        return (
            <a href={link}>
                <button style={style} className={`poke-button ${className}`} onClick={onClick}>
                    <img src={icon} alt={icon} />
                    <p>{title}</p>
                </button>
            </a>
        );
    }
}




