import React from 'react'

export default class DelayLink extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const to = this.props.to
        const delayJump = (e) => {
            e.preventDefault()
            e.stopPropagation()
            setTimeout(()=>{
                // location.href = to
                window.open(to)
            }, 320)
        }
        return (
            <div onClick={delayJump}>
                {this.props.children}
            </div>
        )
    }
}
DelayLink.defaultProps = {
    to: "/",
}
