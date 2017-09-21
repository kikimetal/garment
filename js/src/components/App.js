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

import Entrance from "./Entrance"
import Garment from "./Garment"
import NotFound from "./NotFound"

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <DocumentTitle title="TakeruYamashita" />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Entrance} />
                        <Route path="/garment-dev" component={Garment} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
