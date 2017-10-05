import React from "react"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"
import SvgButton from "./SvgButton"
import DelayLink from "./DelayLink"

export default class MobileFooterNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const colorAttr = {
            color: "#666",
            colorHover: "#333",
        }
        return (
            <nav className="MobileFooterNav">
                <ul>
                    <li><NavLink to={`/garment-dev/home`}><SvgButton {...colorAttr}>Home</SvgButton></NavLink></li>
                    <li><NavLink to={`/garment-dev/product`}><SvgButton {...colorAttr}>Products</SvgButton></NavLink></li>
                    <li><NavLink to={`/garment-dev/story`}><SvgButton {...colorAttr}>Story</SvgButton></NavLink></li>
                    <li><NavLink to={`/garment-dev/story`}><SvgButton {...colorAttr}>Instagram</SvgButton></NavLink></li>
                    <li><DelayLink to="/"><SvgButton {...colorAttr}>SHOP</SvgButton></DelayLink></li>
                </ul>
            </nav>
        )
    }
}
