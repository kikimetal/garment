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
            <div className="ToOnlineStore">
                <h1 className="common-title">GARMENT Online Store</h1>
                <div className="text">
                    <p>
                        ガーメントオンラインストアにて<br className="mobile"/>ご購入いただけます。
                    </p>
                    <DelayLink to="/"><SvgButton width={255}>GARMENT Online Store</SvgButton></DelayLink>
                </div>
            </div>
        )
    }
}
