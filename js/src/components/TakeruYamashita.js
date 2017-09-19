import React from "react"
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

import EdgeLine from "./EdgeLine"

export default class TakeruYamashita extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }
    render(){
        // mouseover animation attr
        const animationAttr = {
            onMouseOver: () => this.setState({hover: true}),
            onMouseOut: () => this.setState({hover: false}),
        }
        return (
            <div className="TakeruYamashita">
                <EdgeLine />
                <NavLink to="/garment-dev">
                    <div className="logo" {...animationAttr}></div>
                    <p className={`dive ${this.state.hover && "on"}`} {...animationAttr}>Dive!</p>
                </NavLink>
            </div>
        )
    }
}

// <Motion defaultStyle={{opacity: 0, translateX: 0}} style={{opacity: spring(1), translateX: spring(window.innerWidth, {stiffness: 10, damping: 8, precision: 0.01})}}>

// <Motion defaultStyle={{opacity: 0, translateX: -100}} style={{opacity: spring(1), translateX: spring(200, {stiffness: 120, damping: 6, precision: 0.1})}}>
//     {value => <div style={{opacity: value.opacity, transform: `translateX(${value.translateX}px)`}}>ああああああ</div>}
// </Motion>
