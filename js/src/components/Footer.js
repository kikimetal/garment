import React from "react"
import SvgButton from "./SvgButton"
const Footer = props => (
    <footer className="Footer" {...props}>
        <div className="links">
            <SvgButton size={12} width={130} shapeColorHover="#eee">Contact</SvgButton>
            <SvgButton size={12} width={130} shapeColorHover="#eee">Terms of use</SvgButton>
            <SvgButton size={12} width={130} shapeColorHover="#eee">Pravacy policy</SvgButton>
        </div>
        <div className="end-credit">
            当サイトはMac環境にて、Safariでの表示を確認しています。<br/>
            copyright &copy; 2017 Maylily Co., Ltd.
        </div>
    </footer>
)
export default Footer
