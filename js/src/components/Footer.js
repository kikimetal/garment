import React from "react"
import SvgButton from "./SvgButton"
const Footer = props => (
    <footer className="footer" {...props}>
        <SvgButton size={18} width={190} shapeColorHover="#eee">Contact</SvgButton>
        <SvgButton size={18} width={190} shapeColorHover="#eee">Terms of use</SvgButton>
        <SvgButton size={18} width={190} shapeColorHover="#eee">Pravacy policy</SvgButton>
        <span className="copyright">copyright &copy; 2017 Maylily Co., Ltd.</span>
    </footer>
)
export default Footer
