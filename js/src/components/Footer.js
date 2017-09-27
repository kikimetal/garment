import React from "react"
import SvgButton from "./SvgButton"
const Footer = () => (
    <footer className="footer">
        <SvgButton size={22} width={280} shapeColorHover="#eee">Contact</SvgButton>
        <SvgButton size={22} width={280} shapeColorHover="#eee">Terms of use</SvgButton>
        <SvgButton size={22} width={280} shapeColorHover="#eee">Pravacy policy</SvgButton>
        <span className="copyright">copyright &copy; 2017 Maylily Co., Ltd.</span>
    </footer>
)
export default Footer
