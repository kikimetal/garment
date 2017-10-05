import React from "react"
export default class ScrollToTopOnMount extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
            window.scrollTo(0, 0)
        }, 100)
    }
    render(){
        return null
    }
}
