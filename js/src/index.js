import "babel-polyfill"
import React from "react"
// import ReactDOM from "react-dom"
import {render} from "react-snapshot"

import App from "./components/App"

// ReactDOM.render(
render(
    <App />,
    document.getElementById("root")
)
