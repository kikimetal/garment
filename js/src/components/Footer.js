import React from "react"
import {Link} from "react-router-dom"

import SvgButton from "./SvgButton"

const Footer = props => (
    <footer className="Footer">
        <div className="links">
            <Link to={`${props.path}/contact`}><SvgButton size={12} width={130} shapeColorHover="#eee">Contact</SvgButton></Link>
            <Link to={`${props.path}/terms-of-use`}><SvgButton size={12} width={130} shapeColorHover="#eee">Terms of use</SvgButton></Link>
            <Link to={`${props.path}/privacy-policy`}><SvgButton size={12} width={130} shapeColorHover="#eee">Pravacy policy</SvgButton></Link>
        </div>
        <div className="end-credit">
            当サイトはMac環境にて、Safariでの表示を確認しています。<br/>
            copyright &copy; 2017 Maylily Co., Ltd.
        </div>
    </footer>
)
export default Footer
