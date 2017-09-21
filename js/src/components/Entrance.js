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

                <div className="main">
                    <NavLink to="/garment-dev">
                        <div className="logo"></div>
                        <SvgButton className="enter">Enter</SvgButton>
                    </NavLink>
                </div>

                <footer className="footer">
                    <NavLink to="/garment-dev">
                        <SvgButton shapeColorHover="#eee">Brand</SvgButton>
                    </NavLink>

                    <SvgButton shapeColorHover="#eee">PageTop</SvgButton>
                    <span style={{padding: "1em 0"}}>Other informations...</span>
                </footer>

            </div>
        )
    }
}
