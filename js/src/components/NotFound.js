import React from "react"
import {Link} from "react-router-dom"
import SvgButton from "./SvgButton"

const NotFound = () => (
    <div className="NotFound">
        <p className="message">Sorry, Page Not Found...</p>
        <Link to="/"><SvgButton width={220} size={16}>HOME</SvgButton></Link>
    </div>
)

export default NotFound
