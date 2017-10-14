import React from "react"

import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom'

import EdgeLine from "./EdgeLine"
import SvgButton from "./SvgButton"
import ScrollToTopOnMount from "./ScrollToTopOnMount"
import Footer from "./Footer"
import DelayLink from "./DelayLink"

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
                        <line stroke="dimgrey" strokeWidth={1} x1={0} y1={4} x2={window.innerWidth} y2={4} />
                    </svg>
                    <svg className="dash-bottom">
                        <line stroke="dimgrey" strokeWidth={1} x1={0} y1={4} x2={window.innerWidth} y2={4} />
                    </svg>
                    <DelayLink to="/garment">
                        <div className="logo"></div>
                        <SvgButton className="enter">Enter</SvgButton>
                    </DelayLink>
                </div>

                <Footer/>

            </div>
        )
    }
}
