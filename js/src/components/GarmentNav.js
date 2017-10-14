import React from "react"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"
import SvgButton from "./SvgButton"
import DelayLink from "./DelayLink"

// import MdOpenInNew from "react-icons/lib/md/open-in-new"
import FaTimesCircle from "react-icons/lib/fa/times-circle"

export default class GarmentNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bgTranslate: null,
        }
        this.handleDeviceOrientation = this.handleDeviceOrientation.bind(this)
    }
    componentDidMount(){
        // if(!this.props.show) return
        window.addEventListener("deviceorientation", this.handleDeviceOrientation)
    }
    componentWillUnmount(){
        window.removeEventListener("deviceorientation", this.handleDeviceOrientation)
    }
    handleDeviceOrientation(e){
        if(!this.props.show) return

        let x = e.beta / 1.6
        let y = e.gamma / 1.3
        const n = 1
        const maxPx = 40
        x = x > maxPx ? maxPx : x < -maxPx ? -maxPx : Math.floor( x * Math.pow( 10, n ) ) / Math.pow( 10, n )
        y = y > maxPx ? maxPx : y < -maxPx ? -maxPx : Math.floor( y * Math.pow( 10, n ) ) / Math.pow( 10, n )
        this.setState({
            bgTranslate: `translate(${y}px, ${x}px)`
        })
    }
    render(){
        const path = this.props.path
        const w = 230 // width
        const isShow = this.props.show ? "show" : "hide"
        const hideNav = this.props.onClickHideNav
        const hideNavDelay = this.props.onClickHideNavDelay
        const colorAttr = {
            color: "#333",
            colorHover: "#060606",
        }
        return (
            <nav className={`GarmentNav ${isShow}`}>
                <div className="bg" style={{transform: this.state.bgTranslate}}></div>
                <div className="logo"></div>
                <ul>
                    <li className="margin" onClick={hideNav}></li>
                    <li><NavLink to={`${path}/home`} onClick={hideNavDelay}><SvgButton {...colorAttr}>HOME</SvgButton></NavLink></li>
                    <li><NavLink to={`${path}/product`} onClick={hideNavDelay}><SvgButton {...colorAttr}>PRODUCTS</SvgButton></NavLink></li>
                    <li><NavLink to={`${path}/story`} onClick={hideNavDelay}><SvgButton {...colorAttr}>STORY</SvgButton></NavLink></li>
                    <li><DelayLink to="/"><SvgButton {...colorAttr}>SHOP</SvgButton></DelayLink></li>
                    <li className="margin" onClick={hideNav}><FaTimesCircle/></li>
                </ul>
            </nav>
        )
    }
}
GarmentNav.propTypes = {
    path: PropTypes.string.isRequired,
}
GarmentNav.defaultProps = {
    show: true,
}
