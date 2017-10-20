import React from "react"
import SvgButton from "./SvgButton"

const Designer = () => (
    <section className="Designer common-style">
        <h1 className="title">
            <div className="ja">トータルファッションクリエイター</div>
            <div className="en">Takeru Yamashita</div>
            <div className="ja">山下 武尊</div>
        </h1>
        <div className="flex-2">
            <img className="takeru" src="/image/takeru.jpg" alt="山下武尊の画像" />
            <div className="text">
                <p>
                    1988年生まれ。フレグランスデザイナーである母の影響を受け、
                    幼少の頃よりフレグランスに親しみながら育つ。
                </p>
                <p>
                    多摩美術大学 工芸学科 金属（彫金／ジュエリーデザイン）を専攻。
                    卒業後、ロンドン芸術大学LONDON COLLEGE OF FASHION BA WOMENSWEARで
                    ファッションデザインを学ぶ。
                </p>
                <p>
                    帰国後、トータルファッションクリエイターとして活動を開始。
                </p>
                <p>
                    2016年、自身の香水ブランド GARMENT をスタート。
                </p>
            </div>
        </div>
    </section>
)

export default Designer
