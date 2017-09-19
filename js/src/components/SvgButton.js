import React from "react"

export default class SvgButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            strokeWidth: this.props.size * 1.7,
            strokeWidthMin: 2,
            strokeWidthMax: this.props.size * 1.7,
            padding: this.props.size * 2
        }
    }
    render(){
        const size = this.props.size
        const innerText = this.props.children || "Hover"
        const width = this.props.width || 320
        const handleMouseOver = () => {
            this.setState({strokeWidth: this.state.strokeWidthMin})
        }
        const handleMouseOut = () => {
            this.setState({strokeWidth: this.state.strokeWidthMax})
        }
        return (
            <div className="SvgButton" style={{fontSize: size, width: width, height: size + this.state.padding}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <svg height={size + this.state.padding} width={width}>
                    <rect className="shape" strokeWidth={this.state.strokeWidth} height={size + this.state.padding} width={width} strokeDashoffset={-width * 1.5 + size / 2} />
                    <text className="text" x={width / 2} y={size + this.state.padding / 2} textAnchor="middle" fontSize={size} width={width}>{innerText}</text>
                </svg>
            </div>
        )
    }
}
SvgButton.defaultProps = {
    size: 20,
}

// <div className="text">{innerText}</div>
