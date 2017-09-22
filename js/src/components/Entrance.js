import React from "react"

import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom'

import EdgeLine from "./EdgeLine"
import SvgButton from "./SvgButton"
import ScrollToTopOnMount from "./ScrollToTopOnMount"

export default class Entrance extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="Entrance">

                <ScrollToTopOnMount />

                <header className="header">
                    <a href="http://www.takeruyamashita.com">www.takeruyamashita.com</a>
                </header>

                <div className="main">
                    <svg className="dash-top">
                        <line className="" stroke="dimgrey" strokeWidth={1} x1={0} y1={4} x2={window.innerWidth} y2={4} />
                    </svg>
                    <svg className="dash-bottom">
                        <line className="" stroke="dimgrey" strokeWidth={1} x1={0} y1={4} x2={window.innerWidth} y2={4} />
                    </svg>
                    <NavLink to="/garment-dev">
                        <div className="logo"></div>
                        <SvgButton className="enter">Enter</SvgButton>
                    </NavLink>
                </div>

                <footer className="footer">
                    <SvgButton size={15} shapeColorHover="#eee">Contact</SvgButton>
                    <SvgButton size={15} shapeColorHover="#eee">Terms of use</SvgButton>
                    <SvgButton size={15} shapeColorHover="#eee">Pravacy policy</SvgButton>
                    <span className="copyright">copyright &copy; 2017 Maylily Co., Ltd.</span>
                </footer>

            </div>
        )
    }
}
