import React from "react"

import DelayLink from "./DelayLink"
import SvgButton from "./SvgButton"

export default class News extends React.Component{
    render(){
        return (
            <div className="News">
                <h1 className="common-title">NEWS</h1>
                <h2 className="sub-title">SubTitle</h2>
                <div className="text">
                    <p>
                                ここにテキストが入ります<br/>
                            ここにテキストが入ります<br/>
                        ここにテキストが入ります<br/>
                    ここにテキストが入ります<br/>
                ここにテキストが入ります<br/>
            ここにテキストが入ります<br/>
                    </p>
                    <div style={{padding: "2em 0"}}>
                        <DelayLink to="/"><SvgButton>テストリンク</SvgButton></DelayLink>
                    </div>
                </div>
            </div>
        )
    }
}
