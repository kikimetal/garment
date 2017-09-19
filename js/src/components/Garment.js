import React from "react"
import {NavLink} from "react-router-dom"

import Button from "./Button"
import SvgButton from "./SvgButton"

export default class Garment extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div className="Garment">

                <SvgButton>HOVER</SvgButton>
                <SvgButton>HOVER33</SvgButton>
                <SvgButton>WE</SvgButton>
                <SvgButton>i am garment</SvgButton>
                <SvgButton>read more</SvgButton>
                <div className="grid">
                    <div className="header">header</div>
                    <div className="main">
                        <p>main</p>
                    </div>
                    <div className="side">side</div>
                    <div className="footer">footer<NavLink to="/"><Button>ReturnToTop</Button></NavLink></div>
                </div>
            </div>
        )
    }
}
