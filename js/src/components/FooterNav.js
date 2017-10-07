import React from "react"
import MdLineWeight from "react-icons/lib/md/line-weight"

import SvgButton from "./SvgButton"

export default class FooterNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="FooterNav">
                <span className="btn" onClick={this.props.onClick}>
                    <SvgButton size={18} width={160}>MENU</SvgButton>
                </span>
            </div>
        )
    }
}
