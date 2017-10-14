import React from "react"
import DocumentTitle from "react-document-title"
import {Switch, NavLink, Route} from "react-router-dom"

import {colors} from "../define"
import ScrollToTopOnMount from "./ScrollToTopOnMount"
import EdgeLine from "./EdgeLine"
import SpreadCircle from "./SpreadCircle"

export default class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShowNav: false,
            productNavType: "base",
        }
        this.navOn = this.navOn.bind(this)
        this.navOff = this.navOff.bind(this)
        this.navToggle = this.navToggle.bind(this)
    }
    componentDidMount(){
        document.querySelector(".FooterNav").addEventListener("touchstart", this.navOff)
        document.querySelector(".Footer").addEventListener("touchstart", this.navOff)
    }
    componentWillUnmount(){
        document.querySelector(".FooterNav").removeEventListener("touchstart", this.navOff)
        document.querySelector(".Footer").removeEventListener("touchstart", this.navOff)
    }
    navOn(){
        if (this.state.isShowNav) return
        this.setState({ isShowNav: true })
    }
    navOff(){
        if (!this.state.isShowNav) return
        this.setState({ isShowNav: false })
    }
    navToggle(){
        this.setState({ isShowNav: !this.state.isShowNav })
    }
    render(){
        const path = this.props.match.path
        return (
            <div className="Product">
                <EdgeLine/>
                <ScrollToTopOnMount />
                <DocumentTitle title="GARMENT::Product" />

                <div onClick={this.navToggle}>
                    <h1 className="page-title">Product</h1>

                    <div
                        className="selected-item-container"
                        onLoad={()=>{setTimeout(this.navOff, 300)}}
                        onTouchMove={this.navOn}
                        onMouseOver={this.navOn}
                        >
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

                    <section
                        className="common-style"
                        onTouchMove={this.navOff}
                        onMouseOver={this.navOn}
                        >
                        <h1 className="title">WARDROBE</h1>
                        <div className="wardrobe">
                            <img className="wardrobe" src="/image/wardrobe.jpg" />
                            <div className="text">
                                <p>
                                    ワードローブの説明です。ワードローブの説明です。ワードローブの説明です。
                                    ワードローブの説明です。ワードローブの説明です。ワードローブの説明です。
                                    ワードローブの説明です。ワードローブの説明です。ワードローブの説明です。
                                </p>
                                <p>
                                    <b>ガーメント ワードローブ</b><br/>
                                    オードトワレ／ユニセックス<br/>
                                10mL x 6(本) 22,000円
                                </p>
                            </div>
                        </div>
                    </section>

                    <section
                        className="common-style"
                        onTouchMove={this.navOff}
                        onMouseOver={this.navOff}
                        >
                        <h1 className="title">BASE FRAGRANCE</h1>
                        <div className="text">
                            <p>ベースフレグランスは、色から感じるイメージを香りで表現した香水です。</p>
                            <p>「今日は何色の服を着よう？」</p>
                            <p>そんな感覚で香りをまとって、お気に入りの香りをお楽しみください。</p>
                        </div>
                    </section>

                    <section
                        className="common-style"
                        onTouchMove={this.navOff}
                        onMouseOver={this.navOff}
                        >
                        <h1 className="title">FRAGRANCE FILTER</h1>
                        <div className="text">
                            <p>フレグランスフィルターは、洋服の特徴や生地の質感を表現した香水です。</p>
                            <p>「エレガントに仕上げたい」「今日は“かわいい”をプラスして」「さらっとカジュアルなスタイルに」</p>
                            <p>加えたいテイストのフィルターをベースと組み合わせて、自分らしいスタイリングをお楽しみください。</p>
                        </div>
                    </section>

                </div>

                <nav
                    className={`product-nav ${this.state.isShowNav || "hide"}`}
                    onMouseOver={this.navOn}
                    >
                    <h2 className="product-nav-title">
                        <div className={this.state.productNavType === "base" && "selected"} onClick={()=>this.setState({productNavType: "base"})}>Base</div>
                        <div className={this.state.productNavType === "filter" && "selected"} onClick={()=>this.setState({productNavType: "filter"})}>Filter</div>
                    </h2>
                    <UlBase path={path} isShow={this.state.productNavType === "base"} />
                    <UlFilter path={path} isShow={this.state.productNavType === "filter"} />
                </nav>

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
        // scrollto this top
        const y = document.querySelector(".Garment .page-title").getBoundingClientRect().height
        window.scrollTo(0, y)
    }
    render(){
        return (
            <div className={`fragrance ${this.state.loaded}`}>
                {this.props.type === "base" ? <h1 className="common-title">BASE FRAGRANCE</h1> : <h1 className="common-title">FRAGRANCE FILTER</h1>}
                <img
                    className="product-photo"
                    src={`/image/bottle_photo/${this.props.en}.jpg`}
                    alt={`ガーメント${this.props.ja}の画像`}
                    onLoad={()=>this.setState({loaded: "loaded"})}
                    />
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