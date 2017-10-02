import React from 'react'

export default class DelayLink extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const to = this.props.to
        const delayJump = (e) => {
            e.preventDefault()
            setTimeout(()=>{
                location.href = to
            }, 260)
        }
        return (
            <div onTouchTap={delayJump}>
                {this.props.children}
            </div>
        )
    }
}
DelayLink.defaultProps = {
    to: "/",
}
