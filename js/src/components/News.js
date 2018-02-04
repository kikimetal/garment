import React from "react"

import MdShortText from "react-icons/lib/md/short-text"
import FaTimesCircle from "react-icons/lib/fa/times-circle"

import DelayLink from "./DelayLink"
import SvgButton from "./SvgButton"
import Modal from "./Modal"

import MdToday from "react-icons/lib/md/today"
import MdNotificationsActive from "react-icons/lib/md/notifications-active"
import MdLabelOutline from "react-icons/lib/md/label-outline"

export default class News extends React.Component{
    render(){
        return (
            <div className="News" id="news">
                <h1 className="common-title"><span className="icon"><MdNotificationsActive/></span> NEWS</h1>

                <div className="flex-2">

                    <NewsSection updateDate="2018.02.02">
                        <div>
                            2018.02.02<br/>
                            エストネーション ニュウマン店<br/>
                            ポップアップ開催中
                        </div>
                        <div>
                            <h1>エストネーション ニュウマン店</h1>
                            <br/>
                            2018年2月2日 〜 2018年2月15日<br/>
                            新宿 エストネーション ニュウマン店 にて、<br/>
                            ポップアップを開催中です。<br/>
                            実際に製品を手にとってご覧ください。
                        </div>
                    </NewsSection>

                    <NewsSection updateDate="2017.11.01">
                        <div>
                            2017.11.01<br/>
                            伊勢丹新宿店 取扱開始
                        </div>
                        <div>
                            <h1>伊勢丹新宿店 取扱開始</h1>
                            <br/>
                            2017年11月1日（水）〜<br/>
                            伊勢丹新宿店本館1階＝フレグランスコーナー<br/>
                            <br/>
                            伊勢丹新宿店本館にて11月1日より
                            常設として取り扱いが開始されます。<br/>
                            <br/>
                            実際に製品を手にとってご覧ください。
                        </div>
                    </NewsSection>

                    <NewsSection updateDate="2017.10.27">
                        <div>
                            2017.10.27<br/>
                            オンラインストア オープン
                        </div>
                        <div>
                            <h1>オンラインストア オープン</h1>
                            <br/>
                            2017年10月27日（金）<br/>
                            <br/>
                            ガーメント公式オンラインストアを
                            10月27日にオープンいたしました。<br/>
                            <br/>
                            以下よりいつでもご購入いただけます。
                            ぜひこの機会にご覧ください。<br/>
                            <br/>
                            ＞ガーメント オンラインストア
                            <DelayLink newWindow to="http://takeruyamashita.com/ec/html/">
                                <SvgButton size={17} width={255}>GARMENT Online Store</SvgButton>
                            </DelayLink>
                        </div>
                    </NewsSection>

                    <NewsSection updateDate="2017.10.16">
                        <div>
                            2017.10.21<br/>
                            イセタン サロン ド パルファン<br/>
                            ガーメント セミナー
                        </div>
                        <div>
                            <h1>
                                イセタン サロン ド パルファン<br/>
                                ガーメント セミナー
                            </h1>
                            <p>
                                10月21日(土) 17:30〜18:30（約60分）<br/>
                                伊勢丹新宿店本館7階＝バンケットルーム
                            </p>
                            <p>
                                ガーメントの世界観を体感していただく
                                セミナーを開催いたします。<br/>
                                皆様のご参加を心よりお待ちしております。
                            </p>
                            <div className="link">
                                ＞セミナー予約はこちら
                                <DelayLink newWindow to="http://isetan.mistore.jp/store/shinjuku/floor/main_1f/beauty/index.html;jsessionid=GB85ZJQSQ1KRW6qHcC6TjygBKhT6RvQJ8QHR7kBn1JCL4J91n0P8!-675519718">
                                    <SvgButton size={17} width={200}>ISETAN.MISTORE.JP</SvgButton>
                                </DelayLink>
                            </div>
                        </div>
                    </NewsSection>

                    <NewsSection updateDate="2017.10.16">
                        <div>
                            2017.10.18<br/>
                            新製品 先行販売開始<br/>
                            「ベースフレグランス ホワイト」<br/>
                            「フレグランスフィルター デニムフィルター」<br/>
                            「フレグランス ワードローブ」
                        </div>
                        <div>
                            <h1>
                                新製品 先行販売<br/>
                                「ベースフレグランス ホワイト」<br/>
                                「フレグランスフィルター デニムフィルター」<br/>
                                「フレグランス ワードローブ」
                            </h1>
                            <p>
                                10月18日(水)〜23(月)<br/>
                                伊勢丹新宿店本館7階＝催事場<br/>
                            </p>
                            <p>
                                全国発売に先駆けて、
                                イセタン サロン ド パルファンにて
                                先行販売いたします。
                            </p>
                            <p>ぜひ、この機会にお立ち寄りください。</p>

                            <div className="link">
                                ＞製品の詳細情報はこちら
                                <DelayLink to="/garment/products/white">
                                    <SvgButton size={17} width={200}>PRODUCTS</SvgButton>
                                </DelayLink>
                            </div>
                        </div>
                    </NewsSection>

                    <NewsSection updateDate="2017.10.16">
                        <div>
                            2017.10.18〜10.23<br/>
                            イセタン サロン ド パルファン
                        </div>
                        <div>
                            <h1>イセタン サロン ド パルファン出店</h1>
                            <p>
                                10月18日(水)〜23(月)<br/>
                                伊勢丹新宿店本館7階＝催事場
                            </p>
                            <p>
                                世界中のフレグランスブランドが揃う
                                香りの祭典に今年も出店いたします。
                            </p>
                            <p>
                                会場にてガーメントの商品を17,500円（税抜）以上
                                お買い上げの方に、「トートバッグ」をプレゼント。
                            </p>
                            <p>
                                皆様のご来場をお待ちしております。
                            </p>
                            <div className="link">
                                ＞イセタン サロン ド パルファン 公式サイト
                                <DelayLink newWindow to="http://www.isetanguide.com/20171018/parfum/index.html">
                                    <SvgButton size={17} width={220}>SALON DE PARFUM</SvgButton>
                                </DelayLink>
                            </div>
                        </div>
                    </NewsSection>

                    <NewsSection updateDate="2017.07.10">
                        <div>
                            2017.07.12<br/>
                            イセタン メンズスタイル 取扱開始
                        </div>
                        <div>
                            <h1>イセタン メンズスタイル 取扱開始</h1>
                            <p>
                                2017年7月12日（水）〜<br/>
                                ルクア イーレ8F＝イセタン メンズスタイル<br/>
                            </p>
                            <p>
                                イセタン メンズスタイルにて7月12日より
                                常設として取り扱いが開始されます。
                            </p>
                            <p>
                                実際に製品を手にとってご覧ください。
                            </p>
                        </div>
                    </NewsSection>

                </div>{/* flex-2 */}

            </div>
        )
    }
}

class NewsSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isModalOpen: false,
            isFocus: false,
        }
        this.modalOpen = this.modalOpen.bind(this)
        this.modalClose = this.modalClose.bind(this)
    }
    modalOpen(){
        if (this.state.isModalOpen) return
        this.setState({
            isModalOpen: true,
            isFocus: true,
        })
    }
    modalClose(){
        if (!this.state.isModalOpen) return
        this.setState({
            isModalOpen: false
        })
        setTimeout(()=>{
            this.setState({
                isFocus: false
            })
        }, 300)
    }
    render(){
        const title = this.props.children[0]
        const modalContent = this.props.children[1]
        return(
            <section className={`NewsSection ${this.state.isFocus && "focus"}`}>
                <div className="inner"></div>
                <div className="update-date">Updated {this.props.updateDate}</div>

                <div className="title">{title}</div>
                <div className={`modal ${this.state.isModalOpen ? "open" : "close"}`}>
                    <div className="bg" onClick={this.modalClose}></div>
                    <div className="content" onClick={this.modalClose}>
                        {modalContent}
                        {/*<div className="closer"><FaTimesCircle/></div>*/}
                    </div>
                    <div className="button" onClick={this.modalOpen}><MdShortText className="icon"/>詳細</div>
                </div>

            </section>
        )
    }
}
