import React from "react"
export default class ScrollToThisOnMount extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         rectTop: null,
    //         pageYOffset: null,
    //         py: null,
    //     }
    // }
    componentDidMount(){
        const rect = this.refs.pos.getBoundingClientRect()
        // const rect = document.getElementById("pos").getBoundingClientRect()
        const py = rect.top + window.pageYOffset
        // console.log("rect.top: " + rect.top, "pageYOffset: " + window.pageYOffset, "py: " + py)
        window.scrollTo(0, py)
    }
    render(){
        return <div ref="pos"></div>
    }
}
// <p>rect.top: {this.state.rectTop}</p>
// <p>pageYOffset: {this.state.pageYOffset}</p>
// <p>py: {this.state.py}</p>
