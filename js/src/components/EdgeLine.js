import React from "react"
import {Motion, spring, presets, StaggeredMotion, TransitionMotion} from 'react-motion'

export default class EdgeLine extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ww: window.innerWidth,
            wh: window.innerHeight,
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
        const opacitySpring = spring(1, {stiffness: 36, damping: 8, precision: 0.06})
        const lengthSpringOption = {stiffness: 26, damping: 11, precision: 0.01}
        let strokeWidth = (this.state.ww / 100) * 4
        strokeWidth = strokeWidth < 20 ? strokeWidth + 1 : 21; // max length
        const dashlineDiff = (strokeWidth - 1) / 4
        return (
            <svg className="EdgeLine">
                <Motion defaultStyle={{length: 0, opacity: 0}} style={{length: spring(this.state.ww - strokeWidth/2 , lengthSpringOption), opacity: opacitySpring}}>
                    {value => <g className="top" strokeOpacity={value.opacity}>
                        <line className="line" x1={0} y1={0} x2={value.length} y2={0} strokeWidth={strokeWidth} />
                        <line className="dash" x1={0} y1={dashlineDiff} x2={value.length} y2={dashlineDiff} strokeWidth={1} />
                    </g>}
                </Motion>
                <Motion defaultStyle={{length: this.state.ww, opacity: 0}} style={{length: spring(0 + strokeWidth/2 , lengthSpringOption), opacity: opacitySpring}}>
                    {value => <g className="bottom" strokeOpacity={value.opacity}>
                        <line className="line" x1={this.state.ww} y1={this.state.wh} x2={value.length} y2={this.state.wh} strokeWidth={strokeWidth} />
                        <line className="dash" x1={this.state.ww} y1={this.state.wh - dashlineDiff} x2={value.length} y2={this.state.wh - dashlineDiff} strokeWidth={1} />
                    </g>}
                </Motion>
                <Motion defaultStyle={{length: this.state.wh, opacity: 0}} style={{length: spring(0 + strokeWidth/2 , lengthSpringOption), opacity: opacitySpring}}>
                    {value => <g className="left" strokeOpacity={value.opacity}>
                        <line className="line" x1={0} y1={this.state.wh} x2={0} y2={value.length} strokeWidth={strokeWidth} />
                        <line className="dash" x1={dashlineDiff} y1={this.state.wh} x2={dashlineDiff} y2={value.length} strokeWidth={1} />
                    </g>}
                </Motion>
                <Motion defaultStyle={{length: 0, opacity: 0}} style={{length: spring(this.state.wh - strokeWidth/2 , lengthSpringOption), opacity: opacitySpring}}>
                    {value => <g className="right" strokeOpacity={value.opacity}>
                        <line className="line" x1={this.state.ww} y1={0} x2={this.state.ww} y2={value.length} strokeWidth={strokeWidth} />
                        <line className="dash" x1={this.state.ww - dashlineDiff} y1={0} x2={this.state.ww - dashlineDiff} y2={value.length} strokeWidth={1} />
                    </g>}
                </Motion>
            </svg>
        )
    }
}
