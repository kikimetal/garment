import React from "react"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"
import SvgButton from "./SvgButton"
import DelayLink from "./DelayLink"

export default class GarmentNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const path = this.props.path
        const w = 230 // width
        const isShow = this.props.show ? "show" : "hide"
        const hideNav = this.props.onClickHideNav
        const hideNavDelay = this.props.onClickHideNavDelay
        const colorAttr = {
            color: "#666",
            colorHover: "#333",
        }
        return (
            <nav className={`GarmentNav ${isShow}`}>
                <ul>
                    <li className="margin" onClick={hideNav}></li>
                    <li><NavLink to={`${path}/home`} onClick={hideNavDelay}><SvgButton {...colorAttr}>Home</SvgButton></NavLink></li>
                    <li><NavLink to={`${path}/product`} onClick={hideNavDelay}><SvgButton {...colorAttr}>Products</SvgButton></NavLink></li>
                    <li><NavLink to={`${path}/story`} onClick={hideNavDelay}><SvgButton {...colorAttr}>Story</SvgButton></NavLink></li>
                    <li><NavLink to={`${path}/story`} onClick={hideNavDelay}><SvgButton {...colorAttr}>Instagram</SvgButton></NavLink></li>
                    <li><DelayLink href="/"><SvgButton {...colorAttr}>SHOP</SvgButton></DelayLink></li>
                    <li className="margin" onClick={hideNav}></li>
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
