import {colors} from "../define"
import React from "react"
import DocumentTitle from "react-document-title"
import {Switch, NavLink, Route} from "react-router-dom"

import NotFound from "./NotFound"
import ScrollToTopOnMount from "./ScrollToTopOnMount"
import ScrollToThisOnMount from "./ScrollToThisOnMount"
import EdgeLine from "./EdgeLine"
import Designer from "./Designer"
import SpreadCircle from "./SpreadCircle"
import Footer from "./Footer"
import MobileFooterNav from "./MobileFooterNav"
import RouteTransition from "./RouteTransitionDemo"



export const Home = props => (
    <div className="Home">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title="GARMENT" />

        <div style={{margin: "100px auto 0", width: "80%", height: "260px", backgroundImage: "url('/image/logo.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
        <div style={{textAlign: "center", height: "200px", padding: "0", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
            <p>ファッションのように、<br className="mobile"/>香りで自由に個性を表現したい。</p>
            <br/>
            <p>自由に洋服を選ぶように、<br className="mobile"/>自分のこだわりを香りで多彩に表現できる</p>
            <p>「フレグランスフィルタリング」という<br className="mobile"/>新しい香りの着こなし方。</p>
        </div>
        <Footer/>
    </div>
)




export const Story = props => (
    <div className="Story">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title="GARMENT::Story" />

        <h1 className="page-title">Story</h1>
        <div style={{textAlign: "center", padding: "8em 0", fontSize: "30px", background: "#eee"}}>
            <h1>Concept</h1>
        </div>
        <Designer/>
        <Footer/>
    </div>
)




export class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShowNav: true,
            productNavType: "base",
        }
    }
    render(){
        const path = this.props.match.path
        const navOn = () => {
            if (this.state.isShowNav) return
            this.setState({
                isShowNav: true,
            })
        }
        const navOff = () => {
            if (!this.state.isShowNav) return
            this.setState({
                isShowNav: false,
            })
        }
        return (
            <div className="Product">
                <EdgeLine/>
                <ScrollToTopOnMount />
                <DocumentTitle title="GARMENT::Product" />

                <div onTouchStart={navOn}>
                    <h1 className="page-title">Product</h1>

                    <div className="selected-item-container">
                        <Switch>
                            <Route exact path={`${path}/`} component={Cyan} />
                            <Route exact path={`${path}/cyan`} component={Cyan} />
                            <Route exact path={`${path}/magenta`} component={Magenta} />
                            <Route exact path={`${path}/yellow`} component={Yellow} />
                            <Route exact path={`${path}/white`} component={White} />
                            <Route exact path={`${path}/fur`} component={Fur} />
                            <Route exact path={`${path}/frill`} component={Frill} />
                            <Route exact path={`${path}/linen`} component={Linen} />
                            <Route exact path={`${path}/denim`} component={Denim} />
                        </Switch>
                    </div>
                </div>

                <nav className={`product-nav ${this.state.isShowNav || "hide"}`}>
                    <h2 className="product-nav-title">
                        <div className={this.state.productNavType === "base" && "selected"} onClick={()=>this.setState({productNavType: "base"})}>Base</div>
                        <div className={this.state.productNavType === "filter" && "selected"} onClick={()=>this.setState({productNavType: "filter"})}>Filter</div>
                    </h2>
                    <UlBase path={path} isShow={this.state.productNavType === "base"} />
                    <UlFilter path={path} isShow={this.state.productNavType === "filter"} />
                </nav>

                <Footer onTouchStart={navOff}/>
            </div>
        )
    }
}

const UlBase = props => {
    if (!props.isShow) return null
    const path = props.path
    return (
        <ul className="base">
            <li><NavLink to={`${path}/cyan`}><SpreadCircle r={13} color={colors.cyan} /><span className="text" style={{color: colors.cyan}}>Cyan</span></NavLink></li>
            <li><NavLink to={`${path}/magenta`}><SpreadCircle r={13} color={colors.magenta} /><span className="text" style={{color: colors.magenta}}>Magenta</span></NavLink></li>
            <li><NavLink to={`${path}/yellow`}><SpreadCircle r={13} color={colors.yellow} /><span className="text" style={{color: colors.yellow}}>Yellow</span></NavLink></li>
            <li><NavLink to={`${path}/white`}><SpreadCircle r={13} color={colors.white} /><span className="text" style={{color: colors.white}}>White</span></NavLink></li>
        </ul>
    )
}
const UlFilter = props => {
    if (!props.isShow) return null
    const path = props.path
    return (
        <ul className="filter">
            <li><NavLink to={`${path}/fur`}><SpreadCircle r={13} color={colors.filter} /><span className="text" style={{color: colors.filter}}>Fur</span></NavLink></li>
            <li><NavLink to={`${path}/frill`}><SpreadCircle r={13} color={colors.filter} /><span className="text" style={{color: colors.filter}}>Frill</span></NavLink></li>
            <li><NavLink to={`${path}/linen`}><SpreadCircle r={13} color={colors.filter} /><span className="text" style={{color: colors.filter}}>Linen</span></NavLink></li>
            <li><NavLink to={`${path}/denim`}><SpreadCircle r={13} color={colors.filter} /><span className="text" style={{color: colors.filter}}>Denim</span></NavLink></li>
        </ul>
    )
}

class Fragrance extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
        }
    }
    render(){
        return (
            <div className={`fragrance ${this.state.loaded}`} onLoad={()=>this.setState({loaded: "loaded"})}>
                <ScrollToThisOnMount/>
                {this.props.children}
            </div>
        )
    }
}


const Cyan = () => (
    <Fragrance>
        <img src="/image/bottle_photo/cyan.jpg" alt="ガーメントシアンの画像" />
        <div className="text">
            <h2><strong>ガーメント<br/>ベースフレグランス<br/>シアン</strong></h2>
            <br/>
            <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
            <br/>
            <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
            <br/>
            <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p>
        </div>
    </Fragrance>
)
const Magenta = () => (
    <Fragrance>
        <img src="/image/bottle_photo/magenta.jpg" alt="ガーメントシアンの画像" />
        <div className="text">
            <h2><strong>ガーメント<br/>ベースフレグランス<br/>マゼンタ</strong></h2>
            <br/>
            <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
            <br/>
            <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
            <br/>
            <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p>
        </div>
    </Fragrance>
)
const Yellow = () => (
    <Fragrance>
        <img src="/image/bottle_photo/yellow.jpg" alt="ガーメントシアンの画像" />
        <div className="text">
            <h2><strong>ガーメント<br/>ベースフレグランス<br/>イエロー</strong></h2>
            <br/>
            <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
            <br/>
            <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
            <br/>
            <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p>
        </div>
    </Fragrance>
)
const White = () => (
    <Fragrance>
        <img src="/image/bottle_photo/yellow.jpg" alt="ガーメントシアンの画像" />
        <div className="text">
            <h2><strong>ガーメント<br/>ベースフレグランス<br/>イエロー</strong></h2>
            <br/>
            <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
            <br/>
            <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
            <br/>
            <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p>
        </div>
    </Fragrance>
)
const Fur = () => (
    <Fragrance>
        <img src="/image/bottle_photo/fur.jpg" alt="ガーメントシアンの画像" />
        <div className="text">
            <h2><strong>ガーメント<br/>ベースフレグランス<br/>ファー</strong></h2>
            <br/>
            <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
            <br/>
            <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
            <br/>
            <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p>
        </div>
    </Fragrance>
)
const Frill = () => (
    <Fragrance>
        <img src="/image/bottle_photo/frill.jpg" alt="ガーメントシアンの画像" />
        <div className="text">
            <h2><strong>ガーメント<br/>ベースフレグランス<br/>フリル</strong></h2>
            <br/>
            <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
            <br/>
            <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
            <br/>
            <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p>
        </div>
    </Fragrance>
)
const Linen = () => (
    <Fragrance>
        <img src="/image/bottle_photo/linen.jpg" alt="ガーメントシアンの画像" />
        <div className="text">
            <h2><strong>ガーメント<br/>ベースフレグランス<br/>リネン</strong></h2>
            <br/>
            <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
            <br/>
            <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
            <br/>
            <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p>
        </div>
    </Fragrance>
)
const Denim = () => (
    <Fragrance>
        <img src="/image/bottle_photo/linen.jpg" alt="ガーメントシアンの画像" />
        <div className="text">
            <h2><strong>ガーメント<br/>ベースフレグランス<br/>デニム</strong></h2>
            <br/>
            <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
            <br/>
            <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
            <br/>
            <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p>
        </div>
    </Fragrance>
)
