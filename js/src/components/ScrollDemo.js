import React from "react"
import {Link as ScrollLink, Element as ScrollToElement} from "react-scroll"
import SvgButton from "./SvgButton"
import ScrollToTopOnMount from "./ScrollToTopOnMount"

export default class ScrollDemo extends React.Component{
    render(){
        return (
            <div>
                <ScrollToTopOnMount/>

                <ScrollToElement name="top">
                    <div>
                        <ScrollLink to="test01" spy={true} smooth={true} duration={400} offset={30}>
                            duration={400}
                            <SvgButton>test01</SvgButton>
                        </ScrollLink>
                        <ScrollLink to="test02" spy={true} smooth={true} duration={800}>
                            duration={800}
                            <SvgButton>test02</SvgButton>
                        </ScrollLink>
                        <ScrollLink to="test03" spy={true} smooth={true} duration={1200}>
                            duration={1200}
                            <SvgButton>test03</SvgButton>
                        </ScrollLink>
                    </div>
                </ScrollToElement>

                <ScrollToElement name="test01">
                    <div style={{background: "pink", height: "80vh"}}>test01</div>
                </ScrollToElement>
                <ScrollToElement name="test02">
                    <div style={{background: "thistle", height: "80vh"}}>test02</div>
                </ScrollToElement>
                <ScrollToElement name="test03">
                    <div style={{background: "thistle", height: "80vh"}}>
                        test03
                        <ScrollLink to="test01" spy={true} smooth={true} duration={400}>
                            <SvgButton>test01</SvgButton>
                        </ScrollLink>
                        <ScrollLink to="top" spy={true} smooth={true} duration={400}>
                            spy={true} smooth={true} duration={400}
                            <SvgButton>top</SvgButton>
                        </ScrollLink>
                    </div>
                </ScrollToElement>
            </div>
        )
    }
}
