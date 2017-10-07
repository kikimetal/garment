import React from "react"
import SvgButton from "./SvgButton"

const Designer = () => (
    <div className="Designer">
        <h1 className="title">
            <div className="ja">トータルファッションクリエイター</div>
            <div className="en">Takeru Yamashita</div>
            <div className="ja">山下 武尊</div>
        </h1>
        <div className="image"></div>
        <div className="description">
            <p>
                1988年生まれ。フレグランスデザイナーである母の影響を受け、
                <br className="lg-br"/>
                幼少の頃よりフレグランスに親しみながら育つ。
            </p>
            <p>
                多摩美術大学 工芸学科 金属専攻（彫金／ジュエリーデザイン）を専攻。
                <br className="lg-br"/>
                卒業後、ロンドン芸術大学 LONDON COLLEGE OF FASHION BA WOMENSWEAR でファッションデザインを学ぶ。
            </p>
            <p>
                帰国後、トータルファッションクリエイターとして活動を開始。
                <br className="lg-br"/>
                衣装制作のほか、フレグランスをはじめ、アクセサリーやライフスタイル商品などのデザイン、開発を手掛ける。
            </p>
            <p>
                2016年、自身の香水ブランド GARMENT をスタート。
            </p>
        </div>
        <div className="easter-egg">
            <SvgButton size={27} width={340} color="#fff" colorHover="#222">Takeru Yamashita</SvgButton>
        </div>
        <div className="easter-egg">
            <SvgButton size={27} width={260} color="#fff" colorHover="#222">GARMENT</SvgButton>
        </div>
    </div>
)

export default Designer
