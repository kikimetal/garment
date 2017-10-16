import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'
import DocumentTitle from "react-document-title"
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()

import Entrance from "./Entrance"
import Garment from "./Garment"
import NotFound from "./NotFound"
import SvgButton from "./SvgButton"

import Maintenance from "./Maintenance"

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        document.body.style.background = "#444"
    }
    render(){
        return (
            <div className="App">
                <Maintenance/>

                <DocumentTitle title="TakeruYamashita" />

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Entrance} />
                        <Route path="/garment" component={Garment} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}
