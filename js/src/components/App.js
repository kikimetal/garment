import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

import TakeruYamashita from "./TakeruYamashita"
import Garment from "./Garment"
import NotFound from "./NotFound"

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={TakeruYamashita} />
                        <Route exact path="/garment-dev" component={Garment} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
