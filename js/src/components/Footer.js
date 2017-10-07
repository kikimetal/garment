import React from "react"
import SvgButton from "./SvgButton"
const Footer = props => (
    <footer className="Footer" {...props}>
        <div className="links">
            <SvgButton size={12} width={130} shapeColorHover="#eee">Contact</SvgButton>
            <SvgButton size={12} width={130} shapeColorHover="#eee">Terms of use</SvgButton>
            <SvgButton size={12} width={130} shapeColorHover="#eee">Pravacy policy</SvgButton>
        </div>
        <span className="copyright">copyright &copy; 2017 Maylily Co., Ltd.</span>
    </footer>
)
export default Footer
