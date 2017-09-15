import React from "react"
import {Motion, spring, presets, StaggeredMotion, TransitionMotion} from 'react-motion'
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

export default class TakeruYamashita extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ww: window.innerWidth,
            wh: window.innerHeight,
            hover: false
        }
        this.handleResize = this.handleResize.bind(this)
    }
    handleResize(){
        this.setState({
            ww: window.innerWidth,
            wh: window.innerHeight,
        })
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    render(){
        // svg setting
        const opacitySpring = spring(1, {stiffness: 60, damping: 8, precision: 0.06})
        const strokeWidth = (this.state.ww / 100) * 2 + 2
        // mouseover animation attr
        const animationAttr = {
            onMouseOver: () => this.setState({hover: true}),
            onMouseOut: () => this.setState({hover: false}),
        }
        return (
            <div className="TakeruYamashita">
                <svg className="edge-color-lines">
                    <Motion defaultStyle={{length: 0, opacity: 0}} style={{length: spring(this.state.ww - strokeWidth/2 , {stiffness: 22, damping: 11, precision: 0.01}), opacity: opacitySpring}}>
                        {value => <line className="top" stroke="#46e" x1={0} y1={0} x2={value.length} y2={0} strokeWidth={strokeWidth} strokeOpacity={value.opacity} />}
                    </Motion>
                    <Motion defaultStyle={{length: this.state.ww, opacity: 0}} style={{length: spring(0 + strokeWidth/2 , {stiffness: 22, damping: 11, precision: 0.01}), opacity: opacitySpring}}>
                        {value => <line className="bottom" stroke="#c3b" x1={this.state.ww} y1={this.state.wh} x2={value.length} y2={this.state.wh} strokeWidth={strokeWidth} strokeOpacity={value.opacity} />}
                    </Motion>
                    <Motion defaultStyle={{length: this.state.wh, opacity: 0}} style={{length: spring(0 + strokeWidth/2 , {stiffness: 22, damping: 11, precision: 0.01}), opacity: opacitySpring}}>
                        {value => <line className="left" stroke="#fb3" x1={0} y1={this.state.wh} x2={0} y2={value.length} strokeWidth={strokeWidth} strokeOpacity={value.opacity} />}
                    </Motion>
                    <Motion defaultStyle={{length: 0, opacity: 0}} style={{length: spring(this.state.wh - strokeWidth/2 , {stiffness: 22, damping: 11, precision: 0.01}), opacity: opacitySpring}}>
                        {value => <line className="right" stroke="#fff" x1={this.state.ww} y1={0} x2={this.state.ww} y2={value.length} strokeWidth={strokeWidth} strokeOpacity={value.opacity} />}
                    </Motion>
                </svg>
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
