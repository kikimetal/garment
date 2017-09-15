import React from "react"
import {NavLink} from "react-router-dom"

import Button from "./Button"

export default class Garment extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div id="garment-app">
                <h1>hello i am garment</h1>
                <NavLink to="/"><Button>top</Button></NavLink>
            </div>
        )
    }
}
