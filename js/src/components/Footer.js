import React from "react"
import SvgButton from "./SvgButton"
const Footer = () => (
    <footer className="footer">
        <SvgButton shapeColorHover="#eee">Contact</SvgButton>
        <SvgButton shapeColorHover="#eee">Terms of use</SvgButton>
        <SvgButton shapeColorHover="#eee">Pravacy policy</SvgButton>
        <span className="copyright">copyright &copy; 2017 Maylily Co., Ltd.</span>
    </footer>
)
export default Footer
