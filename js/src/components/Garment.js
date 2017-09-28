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

export default class Garment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShowNav: false,
        }
        this.showNav = this.showNav.bind(this)
        this.hideNav = this.hideNav.bind(this)
        this.hideNavDelay = this.hideNavDelay.bind(this)
    }
    componentWillMount(){
        document.body.style.background = "#fafafa"
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
        }, 300)
    }
    render(){
        const path = this.props.match.path // App.jsより引き継ぎ
        // console.log(path)
        return (
            <div className="Garment">

                <div className={`nav-btn ${this.state.isShowNav && "hide"}`} onClick={this.showNav}>
                    <Apps />
                </div>
                <GarmentNav path={path} show={this.state.isShowNav} onClickHideNav={this.hideNav} onClickHideNavDelay={this.hideNavDelay} />

                <RouteTransition pathname={ location.pathname } className={`blur-container ${this.state.isShowNav && "on"}`}>
                    <ScrollToTopOnMount />

                    <EdgeLine/>
                    <Switch>
                        <Route exact path={path} component={Pages.Home} />
                        <Route exact path={`${path}/home`} component={Pages.Home} />
                        <Route exact path={`${path}/product`} component={Pages.Product} />
                        <Route exact path={`${path}/story`} component={Pages.Story} />
                        <Route component={NotFound} />
                    </Switch>

                    <Footer/>
                </RouteTransition>

            </div>
        )
    }
}
// <Route exact path={`${path}/transition`} component={TransitionMotionDemo} />
