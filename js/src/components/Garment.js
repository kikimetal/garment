import {colors} from "../define"
import React from "react"
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom"
// import DocumentTitle from "react-document-title"
import PropTypes from "prop-types"
import MdLineWeight from "react-icons/lib/md/line-weight"

import EdgeLine from "./EdgeLine"
import NotFound from "./NotFound"
import ScrollToTopOnMount from "./ScrollToTopOnMount"
import Footer from "./Footer"
import FooterNav from "./FooterNav"
import GarmentNav from "./GarmentNav"
import * as Pages from "./Pages"

export default class Garment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShowNav: false,
            ww: window.innerWidth,
            lg: false,
        }
        this.showNav = this.showNav.bind(this)
        this.hideNav = this.hideNav.bind(this)
        this.hideNavDelay = this.hideNavDelay.bind(this)
    }
    componentWillMount(){
        document.body.style.background = "#fafafa"
        this.setState({
            lg: this.state.ww >= 1024
        })
        window.addEventListener("resize", ()=>{
            const ww = window.innerWidth
            this.setState({
                ww: ww,
                lg: ww >= 1024,
                isShowNav: ww >= 1024 ? true : false,
            })
        })
    }
    showNav(e){
        if (this.state.lg) return
        e.preventDefault()
        this.setState({
            isShowNav: true,
        })
    }
    hideNav(){
        if (this.state.lg) return
        this.setState({
            isShowNav: false,
        })
    }
    hideNavDelay(){
        if (this.state.lg) return
        setTimeout(()=>{
            this.setState({
                isShowNav: false,
            })
        }, 400)
    }
    render(){
        const path = this.props.match.path // App.jsより引き継ぎ
        return (
            <div className="Garment">

                <div className={`nav-btn ${(this.state.isShowNav || this.state.lg) && "hide"}`} onClick={this.showNav}>
                    <MdLineWeight />
                </div>
                <GarmentNav ww={this.state.ww} path={path} show={this.state.lg ? true : this.state.isShowNav} onClickHideNav={this.hideNav} onClickHideNavDelay={this.hideNavDelay} />

                <div className={`page-route-container`}>
                    <Switch>
                        <Route exact path={path} component={Pages.Home} />
                        <Route exact path={`${path}/home`} component={Pages.Home} />
                        <Route path={`${path}/products`} component={Pages.Products} />
                        <Route exact path={`${path}/concept`} component={Pages.Concept} />
                        <Route exact path={`${path}/store`} component={Pages.Store} />
                        <Route exact path={`${path}/contact`} component={Pages.Contact} />
                        <Route exact path={`${path}/privacy-policy`} component={Pages.PrivacyPolicy} />
                        <Route exact path={`${path}/terms-of-use`} component={Pages.TermsOfUse} />
                        <Route component={NotFound} />
                    </Switch>

                    <FooterNav onClick={this.showNav} />
                    <Footer path={path}/>
                </div>

            </div>
        )
    }
}
