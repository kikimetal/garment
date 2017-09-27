import React from "react"

export default class SpreadCircle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            disable: false,
            putLightly: false,
            spread: false,
        }
        this.putLightly = this.putLightly.bind(this)
        this.putLightlyCancel = this.putLightlyCancel.bind(this)
        this.spread = this.spread.bind(this)
    }
    putLightlyCancel(){
        this.setState({putLightly: false})
    }
    putLightly(){
        if (this.state.disable) return
        this.setState({
            putLightly: true,
            spread: false,
        })
    }
    spread(){
        if (this.state.disable) {
            this.setState({putLightly: false})
            return
        }
        this.setState({
            putLightly: false,
            spread: true,
            disable: true
        })
        setTimeout(()=>{
            this.setState({
                disable: false,
                spread: false,
            })
        }, 1000)
    }
    render(){
        const r2 = this.props.r * 2
        const style = Object.assign({}, {
            width: r2,
            height: r2,
            background: this.props.color,
        }, this.props.style)
        const vmax = window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth
        const spreadOnStyle = this.state.spread ? {transform: `scale(${vmax / r2})`} : {}
        return (
            <div
            className={`SpreadCircle`}
            style={style}
            onMouseOver={this.putLightly}
            onMouseOut={this.putLightlyCancel}
            onClick={this.spread}
            onTouchStart={this.putLightly}
            onTouchEnd={this.spread}
            onTouchCancel={this.spread}>
                <div className={`putLightly ${this.state.putLightly && "on"}`}></div>
                <div
                className={`spread ${this.state.spread && "on"}`}
                style={spreadOnStyle}
                ></div>
            </div>
        )
    }
}
SpreadCircle.defaultProps = {
    r: 8,
    color: "#333",
}
