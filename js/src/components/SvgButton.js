import React from "react"

export default class SvgButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hover: false,
            strokeWidth: null,
            shapeColor: this.props.color || this.props.shapeColor,
            textColor: this.props.color || this.props.textColor || this.props.shapeColor,
        }
    }
    render(){
        const size = this.props.size
        const width = this.props.width
        const padding = this.props.size * 0.9
        const height = Math.floor(size + padding * 2) + 1
        const innerText = this.props.children || "Hover"

        const strokeWidthMin = 2
        const strokeWidthMax = this.props.size * 1.5

        const underlineScale = 0.5
        const strokeDashoffset = this.state.hover ? 0 : -1 * (width + height + (width*(1 - underlineScale))/2)
        const strokeDasharray = this.state.hover ? 0 : `${width * underlineScale} ${width*2 + height*2}`

        const handleMouseOut = () => {
            this.setState({
                hover: false,
                strokeWidth: strokeWidthMax,
                shapeColor: this.props.color || this.props.shapeColor,
                textColor: this.props.color || this.props.textColor || this.props.shapeColor,
            })
        }

        const handleMouseOver = () => {
            this.setState({
                hover: true,
                strokeWidth: strokeWidthMin,
                shapeColor: this.props.colorHover || this.props.color || this.props.shapeColorHover || this.state.shapeColor,
                textColor: this.props.colorHover || this.props.color || this.props.textColorHover || this.props.shapeColorHover || this.state.textColor,
            })
        }

        const handleTouchStart = () => {
            setTimeout(handleMouseOut, 500)
            handleMouseOver()
        }

        const handleTouchEnd = () => {
            handleMouseOut()
        }

        return (
            <div
            className="SvgButton"
            style={{fontSize: size, width: width, height: height}}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}>
                <svg height={height} width={width}>
                    <rect className="shape" stroke={this.state.shapeColor} strokeDasharray={strokeDasharray} strokeWidth={this.state.strokeWidth || strokeWidthMax} width={width} height={height} strokeDashoffset={strokeDashoffset} />
                    <text className="text" fill={this.state.textColor} x={width / 2} y={size + padding - 2} textAnchor="middle" fontSize={size} width={width}>{innerText}</text>
                </svg>
            </div>
        )
    }
}
SvgButton.defaultProps = {
    size: 18,
    width: 200,
    color: null, // 強制力大
    colorHover: null, // 強制力大
    shapeColor: "#aaa",
    shapeColorHover: "#666",
    textColor: null,
    textColorHover: null,
}

// <line className="underline" x1="0" y1={size * 2.5} x2={width} y2={size * 2.5} stroke="red" strokeWidth="18" />

// <div className="text">{innerText}</div>
