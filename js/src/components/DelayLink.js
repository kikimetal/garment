import React from 'react'

export default class DelayLink extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const href = this.props.href
        const delayJump = (e) => {
            e.preventDefault()
            setTimeout(()=>{
                location.href = href
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
    href: "/",
}
