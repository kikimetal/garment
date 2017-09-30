import React from "react"

export default class SpreadCircle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            disable: false,
            putLightly: false,
            spread: false,
            setTimeoutId: null,
        }
        this.putLightly = this.putLightly.bind(this)
        this.putLightlyCancel = this.putLightlyCancel.bind(this)
        this.spread = this.spread.bind(this)
    }
    componentWillUnmount(){
        clearTimeout(this.state.setTimeoutId)
    }
    putLightlyCancel(){
        this.setState({
            putLightly: false,
        })
    }
    putLightly(e){
        // e.preventDefault()
        this.setState({
            putLightly: true,
        })
    }
    spread(e){
        // e.preventDefault()
        if (this.state.disable) {
            return this.setState({
                putLightly: false,
                disable: false,
            })
        }
        clearTimeout(this.state.setTimeoutId)
        const setTimeoutId = setTimeout(()=>{
            this.setState({
                disable: false,
                spread: false,
            })
        }, 700)
        this.setState({
            putLightly: false,
            spread: true,
            disable: true,
            setTimeoutId: setTimeoutId,
        })
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
        const putLightlyStyle = this.props.borderColor ? {borderColor: this.props.borderColor} : {border: "none"}

        return (
            <div
            className={`SpreadCircle ${window.innerWidth < 500 && "mobile"}`}
            style={style}
            onMouseOver={this.putLightly}
            onMouseOut={this.putLightlyCancel}
            onClick={this.spread}
            onTouchStart={this.putLightly}
            onTouchEnd={this.spread}
            onTouchCancel={this.spread}>
                <div className={`spread ${this.state.spread && "on"}`} style={spreadOnStyle}></div>
                <div className={`putLightly ${this.state.putLightly && "on"}`} style={putLightlyStyle}></div>
            </div>
        )
    }
}
SpreadCircle.defaultProps = {
    r: 8,
    color: "#333",
    // borderColor: "#999",
}
