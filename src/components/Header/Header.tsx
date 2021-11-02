import React, {FC} from 'react';
import logo from '../../assets/chucknorris_logo.png'
import {style} from "./style";


const Header: FC = () => {
    return (
        <div style={style}>
            <img style={style.img} src={logo} alt="logo"/>
        </div>
    );
};

export default Header
