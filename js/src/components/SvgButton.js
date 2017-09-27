import React from "react"

export default class SvgButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hover: false,
            ww: window.innerWidth,
            timeoutId: null,
            shapeColor: this.props.color || this.props.shapeColor,
            textColor: this.props.color || this.props.textColor || this.props.shapeColor,
        }
        this.handleResize = this.handleResize.bind(this)
    }
    handleResize(){
        this.setState({
            ww: window.innerWidth,
        })
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    render(){
        const ww = this.state.ww
        let size = this.props.size
        let width = this.props.width
        size = ww > 640
            ? size
            : ww > 375
                ? size * 0.76
                : size * 0.65
        width = ww > 640
            ? width
            : ww > 375
                ? width * 0.57
                : width * 0.48
        const padding = ww > 640 ? size * 0.9 : size * 0.7
        const height = Math.floor(size + padding * 2) + 1
        const innerText = this.props.children || "Hover"

        const strokeWidthMin = 2
        const strokeWidthMax = size * 1.4

        const underlineScale = ww > 640 ? 0.5 : 0.4
        const strokeDashoffset = this.state.hover ? 0 : -1 * (width + height + (width*(1 - underlineScale))/2)
        const strokeDasharray = this.state.hover ? 0 : `${width * underlineScale} ${width*2 + height*2}`

        const handleMouseOut = () => {
            this.setState({
                hover: false,
                shapeColor: this.props.color || this.props.shapeColor,
                textColor: this.props.color || this.props.textColor || this.props.shapeColor,
            })
        }

        const handleMouseOver = () => {
            this.setState({
                hover: true,
                shapeColor: this.props.colorHover || this.props.color || this.props.shapeColorHover || this.state.shapeColor,
                textColor: this.props.colorHover || this.props.color || this.props.textColorHover || this.props.shapeColorHover || this.state.textColor,
            })
        }

        const handleTouchStart = () => {
            clearTimeout(this.state.timeoutId)
            const timeoutId = setTimeout(handleMouseOut, 1000)
            handleMouseOver()
            this.setState({
                timeoutId: timeoutId,
            })
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
                    <rect className="shape" stroke={this.state.shapeColor} strokeDasharray={strokeDasharray} strokeWidth={this.state.hover ? strokeWidthMin : strokeWidthMax} width={width} height={height} strokeDashoffset={strokeDashoffset} />
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
    shapeColor: "#888",
    shapeColorHover: "#555",
    textColor: null,
    textColorHover: null,
    letterSpaceing: "3px",
}

// <text className="text" fill={this.state.textColor} x={width / 2} y={size + padding - 2} textAnchor="middle" fontSize={size} width={width}>{innerText}</text>
