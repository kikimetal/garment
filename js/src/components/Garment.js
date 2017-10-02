import {colors} from "../define"
import React from "react"
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom"
import DocumentTitle from "react-document-title"
import PropTypes from "prop-types"
import Apps from 'react-icons/lib/md/apps'

import EdgeLine from "./EdgeLine"
import Button from "./Button"
import SvgButton from "./SvgButton"
import NotFound from "./NotFound"
import ScrollToTopOnMount from "./ScrollToTopOnMount"
import TransitionMotionDemo from "./TransitionMotionDemo"
import ParallaxDemo from "./ParallaxDemo"
import Designer from "./Designer"
import Footer from "./Footer"
import GarmentNav from "./GarmentNav"
import * as Pages from "./Pages"
import RouteTransition from "./RouteTransitionDemo"
import SpreadCircle from "./SpreadCircle"

export default class Garment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShowNav: false,
            isBlur: true,
        }
        this.showNav = this.showNav.bind(this)
        this.hideNav = this.hideNav.bind(this)
        this.hideNavDelay = this.hideNavDelay.bind(this)
    }
    componentWillMount(){
        document.body.style.background = "#fafafa"
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({isBlur: false})
        }, 100)
    }
    showNav(e){
        e.preventDefault()
        this.setState({
            isShowNav: true,
        })
    }
    hideNav(){
        this.setState({
            isShowNav: false,
        })
    }
    hideNavDelay(){
        setTimeout(()=>{
            this.setState({
                isShowNav: false,
            })
        }, 400)
    }
    render(){
        const path = this.props.match.path // App.jsより引き継ぎ
        // console.log(path)
        return (
            <div className="Garment">
                <ScrollToTopOnMount />

                <div className={`nav-btn ${this.state.isShowNav && "hide"}`} onClick={this.showNav}>
                    <Apps />
                </div>
                <GarmentNav path={path} show={this.state.isShowNav} onClickHideNav={this.hideNav} onClickHideNavDelay={this.hideNavDelay} />

                {/*}<RouteTransition pathname={ location.pathname } className={`blur-container ${this.state.isShowNav && "on"}`}>*/}
                <div className={`blur-container ${this.state.isBlur && "on"} ${this.state.isShowNav && "on"}`}>
                    <EdgeLine/>
                    <Switch>
                        <Route exact path={path} component={Pages.Home} />
                        <Route exact path={`${path}/home`} component={Pages.Home} />
                        <Route path={`${path}/product`} component={Pages.Product} />
                        <Route exact path={`${path}/story`} component={Pages.Story} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                {/*</RouteTransition>*/}

            </div>
        )
    }
}




// <Route exact path={`${path}/product/cyan`} component={Pages.Fragrance.Base.Cyan} />
// <Route exact path={`${path}/product/magenta`} component={Pages.Fragrance.Base.Magenta} />
// <Route exact path={`${path}/product/yellow`} component={Pages.Fragrance.Base.Cyan} />

// <Route exact path={`${path}/transition`} component={TransitionMotionDemo} />
