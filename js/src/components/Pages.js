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
import RouteTransition from "./RouteTransitionDemo"
import Footer from "./Footer"
import MobileFooterNav from "./MobileFooterNav"
import News from "./News"
import FooterNav from "./FooterNav"




export const Home = props => (
    <div className="Home">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title="GARMENT" />

        <div className="article">
            <img className="logo reposition-center" src="/image/tag-logo.png" />
            <div className="text">
                <p><b>ファッションのように、<br className="mobile"/>香りで自由に個性を表現したい。</b></p>
                <p>
                    自由に洋服を選ぶように、<br className="mobile"/>自分のこだわりを香りで多彩に表現できる<br/>
                    「フレグランスフィルタリング」という<br className="mobile"/>新しい香りの着こなし方。
                </p>
            </div>
        </div>

        <News/>

    </div>
)




export const Story = props => (
    <div className="Story">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title="GARMENT::Story" />

        <h1 className="page-title">STORY</h1>
        <div className="article">

            <h1 className="common-title">BASE FRAGRANCE</h1>
            <div className="text">
                <p>ベースフレグランスは、色から感じるイメージを香りで表現した香水です。</p>
                <p>「今日は何色の服を着よう？」</p>
                <p>そんな感覚で香りをまとって、お気に入りの香りをお楽しみください。</p>
            </div>

            <h1 className="common-title">FRAGRANCE FILTER</h1>
            <div className="text">
                <p>フレグランスフィルターは、洋服の特徴や生地の質感を表現した香水です。</p>
                <p>「エレガントに仕上げたい」「今日は“かわいい”をプラスして」「さらっとカジュアルなスタイルに」</p>
                <p>加えたいテイストのフィルターをベースと組み合わせて、自分らしいスタイリングをお楽しみください。</p>
            </div>

            <h1 className="common-title">FRAGRANCE FILTERING</h1>
            <img className="ff01" src="/image/ff01.jpg"/>
            <div className="text">
                <p>
                    写真の色彩を操るレンズフィルターから<br className="mobile"/>インスピレーションを受けた<br/>
                    「フレグランスフィルタリング」。
                </p>
                <p>
                    ベースとフィルターを重ねる<br className="mobile"/>「フレグランスフィルタリング」により、<br/>
                ベースの香りを活かしながら、<br className="mobile"/>フィルターの特徴を加え、<br/>
                    自由に香りを着こなすことができます。
                </p>
                <p>
                    その日の気分、ファッション、<br className="mobile"/>シーンに合わせてフィルターを選び、<br/>
                    ベースフレグランスに吹き重ねてお使いください。
                </p>
            </div>
            <img className="ff02" src="/image/ff02.jpg"/>
            <div className="text">
                <p>
                    ベースフレグランスの個性あふれる香りは<br className="mobile"/>単独でもお使いいただけますが、<br/>
                フィルターを使い分けると、<br className="mobile"/>スタイリングの幅がぐっと広がります。
                </p>
                <p>
                    複数のフィルターを重ねて、<br className="mobile"/>香りをより繊細に表現したり、<br/>
                吹き重ねる回数を増やして、<br className="mobile"/>フィルターの特徴をさらに強調したり、<br/>
                    「フレグランスフィルタリング」にルールはありません。
                </p>
                <p>
                    異なるベースフレグランスを組み合わせて、<br/>
                    コラージュするように新しい香りを創作することもできます。
                </p>
                <p>
                    自分の好きなスタイリングを生み出せる<br/>
                    新しいフレグランスの世界＜ガーメント＞をお楽しみください。
                </p>
            </div>
        </div>

        <Designer/>

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
            this.setState({ isShowNav: true })
        }
        const navOff = () => {
            if (!this.state.isShowNav) return
            this.setState({ isShowNav: false })
        }
        const navToggle = () => {
            this.setState({ isShowNav: !this.state.isShowNav })
        }
        return (
            <div className="Product">
                <EdgeLine/>
                <ScrollToTopOnMount />
                <DocumentTitle title="GARMENT::Product" />

                <div onTouchMove={navOn} onClick={navToggle}>
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

                <img onTouchStart={navOff} className="distribution-map reposition-center" src="/image/distribution.png" />
            </div>
        )
    }
}

const UlBase = props => {
    if (!props.isShow) return null
    const path = props.path
    return (
        <ul className="base">
            <li><NavLink to={`${path}/cyan`}><SpreadCircle r={13} color={colors.cyan} /><span className="text" style={{color: colors.cyan}}>CYAN</span></NavLink></li>
            <li><NavLink to={`${path}/magenta`}><SpreadCircle r={13} color={colors.magenta} /><span className="text" style={{color: colors.magenta}}>MAGENTA</span></NavLink></li>
            <li><NavLink to={`${path}/yellow`}><SpreadCircle r={13} color={colors.yellow} /><span className="text" style={{color: colors.yellow}}>YELLOW</span></NavLink></li>
            <li><NavLink to={`${path}/white`}><SpreadCircle r={13} color={colors.white} /><span className="text" style={{color: colors.white}}>WHITE</span></NavLink></li>
        </ul>
    )
}
const UlFilter = props => {
    if (!props.isShow) return null
    const path = props.path
    return (
        <ul className="filter">
            <li><NavLink to={`${path}/fur`}><SpreadCircle r={13} color={colors.filter} /><span className="text" style={{color: colors.filter}}>FUR</span></NavLink></li>
            <li><NavLink to={`${path}/frill`}><SpreadCircle r={13} color={colors.filter} /><span className="text" style={{color: colors.filter}}>FRILL</span></NavLink></li>
            <li><NavLink to={`${path}/linen`}><SpreadCircle r={13} color={colors.filter} /><span className="text" style={{color: colors.filter}}>LINEN</span></NavLink></li>
            <li><NavLink to={`${path}/denim`}><SpreadCircle r={13} color={colors.filter} /><span className="text" style={{color: colors.filter}}>DENIM</span></NavLink></li>
        </ul>
    )
}

class Fragrance extends React.Component{
    constructor(props){
        super(props)
        this.state = { loaded: false }
    }
    componentDidMount(){
        const y = document.querySelector(".Garment .page-title").getBoundingClientRect().height
        window.scrollTo(0, y)
    }
    render(){
        return (
            <div className={`fragrance ${this.state.loaded}`}>
                {/*<ScrollToThisOnMount/>*/}
                <img onLoad={()=>this.setState({loaded: "loaded"})} src={`/image/bottle_photo/${this.props.en}.jpg`} alt={`ガーメント${this.props.ja}の画像`} />
                <div className="text description">
                    {this.props.children}
                </div>
                <div className="text">
                    <h1 className="product-name"><strong>{this.props.type === "base" ? "ベースフレグランス" : "フレグランスフィルター"} {this.props.ja}</strong></h1>
                    {this.props.type === "base" ? <p>オードトワレ／ユニセックス<br/>50mL 12,800円</p> : <p>オードトワレ／ユニセックス<br/>50mL 8800円</p>}
                </div>
            </div>
        )
    }
}


const Cyan = () => (
    <Fragrance en="cyan" ja="シアン" type="base">
        <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
        <br/>
        <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
    </Fragrance>
)
const Magenta = () => (
    <Fragrance en="magenta" ja="マゼンタ" type="base">
        <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
        <br/>
        <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
    </Fragrance>
)
const Yellow = () => (
    <Fragrance en="yellow" ja="イエロー" type="base">
        <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
        <br/>
        <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
    </Fragrance>
)
const White = () => (
    <Fragrance en="white" ja="ホワイト" type="base">
        <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
        <br/>
        <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
    </Fragrance>
)
const Fur = () => (
    <Fragrance en="fur" ja="ファー" type="filter">
        <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
        <br/>
        <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
    </Fragrance>
)
const Frill = () => (
    <Fragrance en="frill" ja="フリル" type="filter">
        <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
        <br/>
        <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
    </Fragrance>
)
const Linen = () => (
    <Fragrance en="linen" ja="リネン" type="filter">
        <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
        <br/>
        <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
    </Fragrance>
)
const Denim = () => (
    <Fragrance en="denim" ja="デニム" type="filter">
        <p><strong>個性にエッジをきかせてドラマチックに</strong></p>
        <br/>
        <p>タバックレザーを基調にセンシュアルな甘い香りが、<br/>男性をよりダンディに、<br/>女性をクールでスタイリッシュに引き立たせます。</p>
    </Fragrance>
)
