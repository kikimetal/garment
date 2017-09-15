import React from "react"
import {Link} from "react-router-dom"
import Button from "./Button"

const NotFound = () => (
    <div className="NotFound">
        <p className="message">Sorry, Page Not Found...</p>
        <Link to="/"><Button>Return to Top</Button></Link>
    </div>
)

export default NotFound
