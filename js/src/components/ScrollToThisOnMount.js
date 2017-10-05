import React from "react"
export default class ScrollToThisOnMount extends React.Component{
    componentDidMount(){
        const rect = this.refs.pos.getBoundingClientRect()
        const py = rect.top + window.pageYOffset
        window.scrollTo(0, py)
    }
    render(){
        return <div ref="pos"></div>
    }
}
