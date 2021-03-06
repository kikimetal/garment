import {TITLE, colors} from "../define"

import React from "react"
// import DocumentTitle from "react-document-title"
import Helmet from "react-helmet"
import {Switch, NavLink, Route} from "react-router-dom"

import FaTimesCircle from "react-icons/lib/fa/times-circle"
import MdInfoOutline from "react-icons/lib/md/info-outline"

import ScrollToTopOnMount from "./ScrollToTopOnMount"
import NotFound from "./NotFound"
import EdgeLine from "./EdgeLine"
import SpreadCircle from "./SpreadCircle"
import ToOnlineStore from "./ToOnlineStore"

export default class Products extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShowNav: true,
            productNavType: "base",
        }
        this.navOn = this.navOn.bind(this)
        this.navOff = this.navOff.bind(this)
        this.navToggle = this.navToggle.bind(this)
        this.setContainerHeight = this.setContainerHeight.bind(this)
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
    setContainerHeight(){
        const itemContainer = document.querySelector(".selected-item-container")
        const h = itemContainer.getBoundingClientRect().height
        itemContainer.minHeight = h
        itemContainer.style.minHeight = h
    }
    render(){
        const path = this.props.match.path
        return (
            <div className="Products">
                <EdgeLine/>
                <ScrollToTopOnMount />
                <Helmet
                  title={TITLE + " | Products"}
                  meta={[
                    { name: "description", content: "ガーメントの商品紹介です。ベースフレグランスや、フレグランスフィルターの特徴などがご覧いただけます。" },
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:title', content: TITLE + " | Products" },
                    { name: 'twitter:description', content: "ガーメントの商品紹介です。ベースフレグランスや、フレグランスフィルターの特徴などがご覧いただけます。" },
                    { name: 'twitter:image', content: 'http://www.takeruyamashita.com/image/0.jpg' },
                    { property: 'og:title', content: TITLE + " | Products" },
                    { property: 'og:type', content: 'website' },
                    { property: 'og:url', content: 'https://www.takeruyamashita.com/garment/products' },
                    { property: 'og:image', content: 'http://www.takeruyamashita.com/image/0.jpg' },
                    { property: 'og:description', content: "ガーメントの商品紹介です。ベースフレグランスや、フレグランスフィルターの特徴などがご覧いただけます。" },
                  ]}
                />

                <div onClick={this.navToggle} onMouseLeave={this.navOff}>
                    <h1 className="page-title">PRODUCTS</h1>

                    <section className="selected-item-container"
                        onTouchMove={this.navOn}
                        onMouseOver={this.navOn}
                        onLoad={this.setContainerHeight}
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
                            <Route component={Cyan} />
                        </Switch>
                    </section>

                    <section className="wardrobe common-style"
                        onTouchMove={this.navOff}
                        >

                        <h1 className="title">FRAGRANCE WARDROBE</h1>
                        <div className="flex-2">

                            <img src="/image/wardrobe.jpg" alt=" フレグランス ワードローブの画像" />

                            <div className="text product-name-container">
                                <p className="product-name">フレグランス ワードローブ</p>
                                <p>
                                    オードトワレ／フレグランスフィルター<br/>
                                    9ml×6本 17,500円（税抜）
                                </p>
                            </div>

                            <div className="text product-list-container">
                                <h2>ベースフレグランス</h2>
                                <ul className="base">
                                    <li><SpreadCircle r={5.5} color={colors.cyan}/><span style={{color: colors.cyan}}>シアン</span></li>
                                    <li><SpreadCircle r={5.5} color={colors.magenta}/><span style={{color: colors.magenta}}>マゼンタ</span></li>
                                    <li><SpreadCircle r={5.5} color={colors.yellow}/><span style={{color: colors.yellow}}>イエロー</span></li>
                                </ul>
                                <h2>フレグランスフィルター</h2>
                                <ul className="filter">
                                    <li><SpreadCircle r={5.5} color={"#888"}/><span style={{color: "#888"}}>ファー</span></li>
                                    <li><SpreadCircle r={5.5} color={"#888"}/><span style={{color: "#888"}}>フリル</span></li>
                                    <li><SpreadCircle r={5.5} color={"#888"}/><span style={{color: "#888"}}>リネン</span></li>
                                </ul>
                            </div>

                            <div className="text">
                                <p>
                                    ガーメントの代表的な6つの香りを詰め込んだ、ブランドの世界観を満喫することができるコレクションです。
                                </p>
                                <p>
                                    ワードローブからアイテムを選ぶように自由に組み合わせて、何通りもの香りを創作することができます。
                                </p>
                                <p>
                                    オリジナルの香りをまとって、個性を演出したコーディネートをお楽しみください。
                                </p>
                            </div>

                        </div>
                    </section>

                    {/*
                        <ToOnlineStore/>
                    */}
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
                    {/*<span className="product-nav-close-button" onClick={this.navOff}><FaTimesCircle/></span>*/}

                    <div className="guide">
                        <MdInfoOutline className="guide-icon"/>切り替えはこちらから。
                    </div>
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
                    <h1 className="product-name"><strong>
                        {this.props.type === "base"
                            ? `ベースフレグランス ${this.props.ja}`
                            : `フレグランスフィルター ${this.props.ja}フィルター`}
                    </strong></h1>
                    {this.props.type === "base" ? <p>オードトワレ／ユニセックス<br/>50mL 12,800円（税抜）</p> : <p>フレグランスフィルター／ユニセックス<br/>50mL 8,800円（税抜）</p>}
                </div>
            </div>
        )
    }
}

const SubHead = props => (
    <p style={{marginBottom: "0.9em"}}><strong>{props.children}</strong></p>
)

const Cyan = () => (
    <Fragrance en="cyan" ja="シアン" type="base">
        <SubHead>個性にエッジをきかせてドラマチックに</SubHead>
        <p>
            シアンカラーを表現する、<br className="mini"/>タバックレザーを基調とした<br/>
        センシュアルな甘い香り。<br className="mini"/>男性をよりダンディに、<br/>
            女性をクールでスタイリッシュに魅せます。
        </p>
    </Fragrance>
)
const Magenta = () => (
    <Fragrance en="magenta" ja="マゼンタ" type="base">
        <SubHead>輝く気品と秘めたる強さを漂わせて</SubHead>
        <p>
            マゼンタカラーにふさわしい、<br className="mini"/>ローズを基調とした<br/>
        キレのある香り。<br className="mini"/>男性のエレガントさ、<br/>
    女性の凛とした美しさを<br className="mini"/>際立たせます。
        </p>
    </Fragrance>
)
const Yellow = () => (
    <Fragrance en="yellow" ja="イエロー" type="base">
        <SubHead>気どらない自分らしさをまとう楽しみ</SubHead>
        <p>
            明るく爽やかで、<br className="mini"/>おしゃれなカジュアルに。<br/>
            イエローカラーからイメージした、<br/>
        清々しいシトラスの<br className="mini"/>エナジェティックな香り。
        </p>
    </Fragrance>
)
const White = () => (
    <Fragrance en="white" ja="ホワイト" type="base">
        <SubHead>白のシャツやワンピースをまとうように</SubHead>
        <p>
            ホワイトカラーを象徴する、<br className="mini"/>透明感あふれる<br/>
            ホワイトフローラルの香り。<br/>
        ふわりと優しく包み込み、<br className="mini"/>気品ある清楚な装いに。
        </p>
    </Fragrance>
)
const Fur = () => (
    <Fragrance en="fur" ja="ファー" type="filter">
        <SubHead>高級感をあたえるフレグランスフィルター</SubHead>
        <p>
            ベースフレグランスに重ねて、<br className="mini"/>仕上げに高級感を。<br/>
        ファーの優美なやわらかさと、<br className="mini"/>深みやぬくもりが<br/>
            寄り添うコーディネートに。
        </p>
    </Fragrance>
)
const Frill = () => (
    <Fragrance en="frill" ja="フリル" type="filter">
        <SubHead>“かわいい” を フィルタリング</SubHead>
        <p>
            “かわいい”をフィルタリング。<br className="mini"/>女性の装いには<br/>
        フリルのようなガーリーで<br className="mini"/>可愛らしい魅力を、 <br/>
    男性のスタイルには<br className="mini"/>遊び心を演出します。
        </p>
    </Fragrance>
)
const Linen = () => (
    <Fragrance en="linen" ja="リネン" type="filter">
        <SubHead>風をはらむ、洗い立てのリネンのように</SubHead>
        <p>
            リネンのような素材感をプラスする<br className="mobile"/>フレグランスフィルター。<br/>
            風がすっと通るような涼やかさ、<br/>
        軽やかでリラックス感のある<br className="mini"/>着こなしを表現します。
        </p>
    </Fragrance>
)
const Denim = () => (
    <Fragrance en="denim" ja="デニム" type="filter">
        <SubHead>シャキッと仕上げるカジュアルコーデ</SubHead>
        <p>
            ベースフレグランスに重ねると、<br className="mini"/>デニム生地の硬く、<br/>
            ハリのある素材感が加わります。<br/>
        タフでカッコイイ、<br className="mini"/>カジュアルコーデに。
        </p>
    </Fragrance>
)
