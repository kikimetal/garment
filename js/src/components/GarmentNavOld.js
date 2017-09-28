import React from "react"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"
import SvgButton from "./SvgButton"

export default class GarmentNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hiddenTimeoutId: null,
            disableTimeoutId: null,
            hidden: false,
            disable: false,
        }
        this.handleTouch = this.handleTouch.bind(this)
    }
    handleTouch(){
        clearTimeout(this.state.hiddenTimeoutId)
        clearTimeout(this.state.disableTimeoutId)
        const hiddenTimeoutId = setTimeout(()=>{
            this.setState({
                hidden: true,
                disable: true,
            })
        }, 2000)
        const disableTimeoutId = setTimeout(()=>{
            this.setState({
                disable: false
            })
        }, 300)
        this.setState({
            hiddenTimeoutId: hiddenTimeoutId,
            disableTimeoutId: disableTimeoutId,
            hidden: false,
        })
    }
    componentDidMount(){
        window.addEventListener("touchstart", this.handleTouch)
        window.addEventListener("touchmove", this.handleTouch)
    }
    componentWillUnmount(){
        window.addEventListener("touchstart", this.handleTouch)
        window.addEventListener("touchmove", this.handleTouch)
    }
    render(){
        const path = this.props.path
        const hidden = this.state.hidden ? "hidden" : ""
        const disable = this.state.disable ? "disable" : ""
        const w = 160
        return (
            <nav className={`GarmentNav ${hidden} ${disable}`}>
                <ul>
                    <li><NavLink to={`${path}/home`}><SvgButton width={w} color="#333">Home</SvgButton></NavLink></li>
                    <li><NavLink to={`${path}/product`}><SvgButton width={w} color="#333">Products</SvgButton></NavLink></li>
                    <li><NavLink to={`${path}/story`}><SvgButton width={w} color="#333">Story</SvgButton></NavLink></li>
                    <li><NavLink to={`${path}/story`}><SvgButton width={w} color="#333">Instagram</SvgButton></NavLink></li>
                    <li><a href="/"><SvgButton width={w} color="#333">SHOP</SvgButton></a></li>
                </ul>
            </nav>
        )
    }
}
GarmentNav.propTypes = {
    path: PropTypes.string.isRequired,
}
