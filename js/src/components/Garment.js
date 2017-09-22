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

export default class Garment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const path = this.props.match.path // App.jsより引き継ぎ
        console.log(path)

        return (
            <div className="Garment">
                <DocumentTitle title="GARMENT" />
                <ScrollToTopOnMount />

                <Nav path={path}/>

                <Switch>
                    <Route exact path={path} component={Main} />
                    <Route exact path={`${path}/product`} component={Product} />
                    <Route exact path={`${path}/Story`} component={Story} />
                    <Route exact path={`${path}/transition`} component={TransitionMotionDemo} />
                    <Route component={NotFound} />
                </Switch>
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




const Nav = props => (
    <div className="Nav">
        <ul>
            <li><NavLink to={props.path}><SvgButton>Garment</SvgButton></NavLink></li>
            <li><NavLink to={`${props.path}/Story`}><SvgButton color="#0c6e93">Story</SvgButton></NavLink></li>
            <li><NavLink to={`${props.path}/product`}><SvgButton color="#8b2884">Product</SvgButton></NavLink></li>
            <li><NavLink to={`${props.path}/transition`}><SvgButton color="green">transition</SvgButton></NavLink></li>
            <li><NavLink to={`${props.path}/notfound`}><SvgButton color="green">not found?</SvgButton></NavLink></li>
            <li><NavLink to={`/`}><SvgButton color="black">Top</SvgButton></NavLink></li>
        </ul>
    </div>
)
Nav.propTypes = {
    path: PropTypes.string.isRequired,
}



const Main = ({match}) => (
    <div>
        <EdgeLine/>
        <ScrollToTopOnMount />
        <div className="grid">
            <div className="header">header</div>
            <div className="side">
                <p>side</p>
                <p>side</p>
            </div>
            <div className="main">
                <p>main</p>
                <p>main</p>
                <p>main</p>
            </div>
        </div>
    </div>
)




const Story = props => {
    return (
        <div style={{textAlign: "center", color: "#ddd"}}>
            <EdgeLine/>
            <ScrollToTopOnMount />
            <Concept />
            <Designer />
        </div>
    )
}

const Concept = () => (
    <div className="Concept">
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
        <h1>Concept</h1>
    </div>
)




const Product = () => (
    <div>
        <EdgeLine/>
        <ScrollToTopOnMount />
        <h1>Product</h1>
        <h1>Product</h1>
        <h1>Product</h1>
        <h1>Product</h1>
    </div>
)
