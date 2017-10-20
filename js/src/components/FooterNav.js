import React from "react"
import MdLineWeight from "react-icons/lib/md/line-weight"

import SvgButton from "./SvgButton"
import DelayLink from "./DelayLink"

export default class FooterNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="FooterNav">
                {/*<div className="info-container">
                    <p>ガーメントオンラインショップにて<br className="mobile"/>ご購入いただけます。</p>
                    <DelayLink to="/"><SvgButton>ONLINE STORE</SvgButton></DelayLink>
                </div>*/}
                <div className="menu-container">
                    <span className="btn" onClick={this.props.onClick}>
                        <SvgButton>MENU</SvgButton>
                    </span>
                </div>
            </div>
        )
    }
}
// size={18} width={160}
