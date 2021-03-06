import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import SvgButton from "./SvgButton"
import DelayLink from "./DelayLink"

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
        if (this.props.ww >= 1024) return
        window.addEventListener("deviceorientation", this.handleDeviceOrientation)
    }
    componentWillUnmount(){
        if (this.props.ww >= 1024) return
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
        const isShow = this.props.show ? "show" : "hide"
        const hideNav = this.props.onClickHideNav
        const hideNavDelay = this.props.onClickHideNavDelay
        const colorAttr = this.props.ww >= 1024
          ? { color: "#555", colorHover: "#060606" }
          : { color: "#222", colorHover: "#060606" }
        return (
            <nav className={`GarmentNav ${isShow}`}>
                <div className="bg" style={{transform: this.state.bgTranslate}}></div>
                <div className="logo"></div>
                <ul>
                    <li className="margin" onClick={hideNav}></li>
                    <li><Link to={`${path}/home`} onClick={hideNavDelay}><SvgButton {...colorAttr}>HOME</SvgButton></Link></li>
                    {/*<li><Link to={`${path}/home#news`} onClick={hideNavDelay}><SvgButton {...colorAttr}>NEWS</SvgButton></Link></li>*/}
                    <li><Link to={`${path}/products`} onClick={hideNavDelay}><SvgButton {...colorAttr}>PRODUCTS</SvgButton></Link></li>
                    <li><Link to={`${path}/concept`} onClick={hideNavDelay}><SvgButton {...colorAttr}>CONCEPT</SvgButton></Link></li>
                    <li><Link to={`${path}/store`} onClick={hideNavDelay}><SvgButton {...colorAttr}>STORE</SvgButton></Link></li>
                    {/*<li><DelayLink to="/"><SvgButton {...colorAttr}>ONLINE STORE</SvgButton></DelayLink></li>*/}
                    <li className="margin" onClick={hideNav}><FaTimesCircle/></li>
                </ul>
                <div className="nav-foot">
                    <small>copyright &copy; 2017 Maylily Co., Ltd.</small>
                </div>
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
