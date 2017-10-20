// import React from "react"
//
// export default class Modal extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             isModalOpen: false,
//         }
//         this.modalOpen = this.modalOpen.bind(this)
//         this.modalClose = this.modalClose.bind(this)
//     }
//     modalOpen(){
//         if (this.state.isModalOpen) return
//         this.setState({isModalOpen: true})
//     }
//     modalClose(){
//         if (!this.state.isModalOpen) return
//         this.setState({isModalOpen: false})
//     }
//     render(){
//         return(
//             <div className={`Modal ${this.state.isModalOpen ? "open" : "close"}`}>
//                 <div className="bg" onClick={this.modalClose}></div>
//                 <div className="content">
//                     {this.props.children}
//                 </div>
//                 <div className="button" onClick={this.modalOpen}>{this.props.buttonText}</div>
//             </div>
//         )
//     }
// }
// Modal.defaultProps = {
//     buttonText: "modal open",
// }
