import {colors} from "../define"
import React from "react"
import DocumentTitle from "react-document-title"

import ScrollToTopOnMount from "./ScrollToTopOnMount"
import EdgeLine from "./EdgeLine"
import Designer from "./Designer"
import SpreadCircle from "./SpreadCircle"

export const Home = props => (
    <div className="Home">
        <DocumentTitle title="GARMENT" />
        <div style={{margin: "100px auto 0", width: "80%", height: "260px", backgroundImage: "url('/image/logo.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
        <div style={{display: "flex", flexFlow: "row", justifyContent: "space-around", width: "240px", margin: "0 auto"}}>
            <SpreadCircle r={9} color={colors.cyan} borderColor="#111" />
            <SpreadCircle r={9} color={colors.magenta} />
            <SpreadCircle r={9} color={colors.yellow} borderColor="#fff" />
            <SpreadCircle r={9} />
            <SpreadCircle r={9} />
        </div>
        <div style={{textAlign: "center", height: "200px", padding: "0", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
            <p>ファッションのように、<br className="mobile"/>香りで自由に個性を表現したい。</p>
            <br/>
            <p>自由に洋服を選ぶように、<br className="mobile"/>自分のこだわりを香りで多彩に表現できる</p>
            <p>「フレグランスフィルタリング」という<br className="mobile"/>新しい香りの着こなし方。</p>
        </div>
    </div>
)

export const Story = props => (
    <div className="Story">
        <DocumentTitle title="GARMENT::Story" />
        <div style={{textAlign: "center", padding: "8em 0", fontSize: "30px"}}>
            <h1>Concept</h1>
        </div>
        <Designer/>
    </div>
)

export const Product = () => (
    <div className="Product">
        <DocumentTitle title="GARMENT::Product" />
        <div className="title">
            title
        </div>
        <div className="title">
            title
        </div>
        <div className="title">
            title
        </div>
        <div className="title">
            title
        </div>
    </div>
)
