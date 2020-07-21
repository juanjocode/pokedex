import React, { Component } from 'react';
import { Toolbar } from '@material-ui/core';
import logo from '../../img/lookemall.svg'

export default class Navbar extends Component {

    render() {
        const { icon, title, link, className, style } = this.props;
        return (
            <header>
                <nav>
                    <a href="/">
                        <img src={logo} width="auto" height="40" alt="logo lokemall" />
                    </a>
                    <ul>
                        <li><a href="#" >Lookemall</a></li>
                        {/* <li><a href="#">About</a></li> */}

                    </ul>
                </nav>
            </header>

        );
    }
}


