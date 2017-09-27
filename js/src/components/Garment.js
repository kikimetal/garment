import React from "react"
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom"
import DocumentTitle from "react-document-title"
import PropTypes from "prop-types"

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
    }
    componentWillMount(){
        document.body.style.background = "#fafafa"
    }
    render(){
        const path = this.props.match.path // App.jsより引き継ぎ
        // console.log(path)

        return (
            <div className="Garment">
                <DocumentTitle title="GARMENT" />

                <GarmentNav path={path}/>
                <RouteTransition pathname={ location.pathname }>
                    <ScrollToTopOnMount />

                    <EdgeLine/>
                    <Switch>
                        <Route exact path={path} component={Pages.Home} />
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
