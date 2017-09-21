import React from "react"
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom"
import DocumentTitle from "react-document-title"

import EdgeLine from "./EdgeLine"
import Button from "./Button"
import SvgButton from "./SvgButton"
import NotFound from "./NotFound"
import ScrollToTopOnMount from "./ScrollToTopOnMount"
import TransitionMotionDemo from "./TransitionMotionDemo"
import RouteTransition from "./RouteTransition"
import ParallaxDemo from "./ParallaxDemo"

export default class Garment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.match)
        const path = this.props.match.path
        return (
            <div className="Garment">

                <DocumentTitle title="GARMENT" />
                <ScrollToTopOnMount />
                
                <RouteTransition pathname={ location.pathname }>
                    <Switch>
                        <Route exact path={path} component={Main} />
                        <Route exact path={`${path}/concept`} component={Concept} />
                        <Route exact path={`${path}/product`} component={Product} />
                        <Route exact path={`${path}/transition`} component={TransitionMotionDemo} />
                        <Route exact path={`${path}/parallax`} component={ParallaxDemo} />
                        <Route component={NotFound} />
                    </Switch>
                </RouteTransition>
            </div>
        )
    }
}




// const RouteTransitionTest = props => (
//     <RouteTransition pathname={ location.pathname }>
//         <h1 style={{fontSize: "100px", height: "130vh", background: "thistle"}}>helooooooo</h1>
//         <NavLink to="/garment-dev"><SvgButton>Top</SvgButton></NavLink>
//     </RouteTransition>
// )




const Main = ({match}) => (
    <div>
        <EdgeLine/>
        <ScrollToTopOnMount />
        <div className="grid">
            <div className="header">header</div>
            <div className="side">
                <ul>
                    <li><NavLink to="/garment-dev"><SvgButton>Top</SvgButton></NavLink></li>
                    <li><NavLink to={`${match.path}/concept`}><SvgButton color="#0c6e93">Concept</SvgButton></NavLink></li>
                    <li><NavLink to={`${match.path}/product`}><SvgButton color="#8b2884">Product</SvgButton></NavLink></li>
                    <li><NavLink to={`${match.path}/transition`}><SvgButton color="green">transition</SvgButton></NavLink></li>
                    <li><NavLink to={`${match.path}/parallax`}><SvgButton color="green">parallax</SvgButton></NavLink></li>
                    <li><NavLink to={`${match.path}/transition2`}><SvgButton color="green">transition2</SvgButton></NavLink></li>
                </ul>
            </div>
            <div className="main">
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
            </div>
            <div className="footer">footer<NavLink to="/"><SvgButton>ReturnToTop</SvgButton></NavLink></div>
        </div>
    </div>
)

const Concept = () => (
    <div style={{textAlign: "center", color: "#ddd"}}>
        <EdgeLine/>
        <ScrollToTopOnMount />
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <NavLink to="/garment-dev"><SvgButton>Top</SvgButton></NavLink>
    </div>
)
const Product = () => (
    <div>
        <EdgeLine/>
        <ScrollToTopOnMount />
        <h1>Product</h1>
        <NavLink to="/garment-dev"><SvgButton>Top</SvgButton></NavLink>
    </div>
)
