import React from "react"
import {Parallax, Background} from "react-parallax"

export default class ParallaxDemo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
              <Parallax strength={300}>
                <Background>
                  <img src="/image/takeru.jpg"/>
                  <img src="/image/takeru.jpg"/>
                  <div style={{
                     width: 800,
                     height: 300,
                     backgroundColor: '#dcf'
                    }}></div>
                  <img src="/image/takeru.jpg"/>
                </Background>
                <div>
                    <h1>something</h1>
                    <h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1><h1>something</h1>
                </div>
              </Parallax>
            </div>
        )
    }
}
