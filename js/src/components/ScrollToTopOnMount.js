import React from "react"
export default class ScrollToTopOnMount extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const id = this.props.id
        console.log(id)
        setTimeout(()=>{
            if(id){
                const py = window.pageYOffset + document.querySelector(id).getBoundingClientRect().top
                window.scrollTo(0, py - 5) // 5 is CSS margin
            }else{
                window.scrollTo(0, 0)
            }
        }, 100)
    }
    render(){
        return null
    }
}
