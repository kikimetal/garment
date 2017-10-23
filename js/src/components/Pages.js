import {TITLE, colors} from "../define"

import React from "react"
import DocumentTitle from "react-document-title"
import {Switch, NavLink, Link, Route} from "react-router-dom"

import SpreadCircle from "./SpreadCircle"
import SvgButton from "./SvgButton"
import DelayLink from "./DelayLink"
import ScrollToTopOnMount from "./ScrollToTopOnMount"
import EdgeLine from "./EdgeLine"
import Designer from "./Designer"
import Footer from "./Footer"
import News from "./News"
import FooterNav from "./FooterNav"

import Products from "./Products"

export {Products}

export const Home = props => (
    <div className="Home">
        <DocumentTitle title={TITLE + " | Home"} />
        <EdgeLine/>

        <ScrollToTopOnMount id={props.location.hash}/>

        <div className="article">
            <img className="logo reposition-center" src="/image/tag-logo.png" />
            <div className="text">
                <p>
                    <b>ファッションのように、<br className="mobile"/>香りで自由に個性を表現したい。</b>
                </p>
                <p>
                    自由に洋服を選ぶように、<br className="mobile"/>自分のこだわりを香りで多彩に表現できる<br/>
                    「フレグランスフィルタリング」という<br className="mobile"/>新しい香りの着こなし方。
                </p>
            </div>
        </div>

        <News/>
    </div>
)

export const Concept = props => (
    <div className="Concept">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title={TITLE + " | Concept"} />
        <h1 className="page-title">CONCEPT</h1>

        <div className="article">

            <section className="common-style">
                <h1 className="title">FRAGRANCE FILTERING</h1>

                <p className="text concept-top-text">
                    写真の色彩を操るレンズフィルターからインスピレーションを受けた<br className="lg"/>
                    「フレグランスフィルタリング」。
                </p>

                <div className="flex-2">

                    <img className="ff01" src="/image/ff01.jpg"/>
                    <div className="text">
                        <p>
                            「フレグランスフィルタリング」とは、ベースフレグランスに
                            フレグランスフィルターを吹き重ねること。
                        </p>
                        <p>
                            ベースの香りをそのまま活かしながら、フィルターの特徴が加わります。
                        </p>
                        <p>
                            その日の気分やファッションに合わせてフィルターを選び、
                            自分らしいスタイルの香りに仕上げることができます。
                        </p>
                    </div>

                    <img className="ff02" src="/image/ff02.jpg"/>
                    <div className="text">
                        <p>
                            「フレグランスフィルタリング」にルールはありません。
                        </p>
                        <p>
                            吹き重ねる回数を増やしたり、複数のフィルターを重ねて、
                            より繊細に香りを表現できます。
                        </p>
                        <p>
                            また、上下で異なる香りをまとい、自分らしさを演出することもできます。
                            自分のこだわりを多彩に表現できるGARMENTの世界をお楽しみください。
                        </p>
                    </div>

                </div>
            </section>

            <section className="common-style">
                <h1 className="title">BASE FRAGRANCE</h1>
                <div className="text center lg-center">
                    <p>
                        ベースフレグランスは、色から感じるイメージを香りで表現した香水です。
                    </p>
                    <p>
                        「今日は何色の服を着ようかな？」 まずはそんな感覚でお選びください。<br/>
                        個性あふれるベースフレグランスは、単独でもお楽しみいただけます。
                    </p>
                    <p>
                        オードトワレ／ユニセックス<br/>
                        50mL 12,800円（税抜）
                    </p>
                    <Link to="/garment/products/cyan"><SvgButton width={245}>BASE FRAGRANCE</SvgButton></Link>
                </div>
            </section>

            <section className="common-style">
                <h1 className="title">FRAGRANCE FILTER</h1>
                <div className="text center lg-center">
                    <p>
                        フレグランスフィルターは、ベースフレグランスの香りを活かしながら、<br className="lg"/>
                        その印象を変化させるために生まれた特徴的な香水です。
                    </p>
                    <p>
                        洋服のデザインや質感を表現したフィルターのテイストを加えることができます。
                    </p>
                    <p>
                        フレグランスフィルター／ユニセックス<br/>
                        50mL 8,800円（税抜）
                    </p>
                    <Link to="/garment/products/fur"><SvgButton width={245}>FRAGRANCE FILTER</SvgButton></Link>
                </div>
            </section>

        </div>

        <Designer/>
    </div>
)

export const Store = () => (
    <div className="Store">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title={TITLE + " | Store"} />
        <h1 className="page-title">STORE</h1>
        {/*<div className="article">
            <section className="flex-2">
                <img src="/image/onlinestore.jpg" />
                <div className="text">
                    ＜オンライン＞<br/>
                    <b>ガーメントオンラインストア</b>
                    <DelayLink to="/ec/html/"><SvgButton width={260}>GARMENT Online Store</SvgButton></DelayLink>
                </div>
            </section>
            <section className="flex-2">
                <img src="/image/takeru.jpg" />
                <div className="text">
                    ＜関東＞<br/>
                    <b>伊勢丹新宿店本館1F フレグランスコーナー</b><br/><br/>

                    160-0022 東京都新宿区新宿3-14-1<br/>
                    TEL 03-3352-1111<br/>
                    営業時間 10:30〜20:00
                </div>
            </section>
            <section className="flex-2">
                <img src="/image/takeru.jpg" />
                <div className="text">
                    ＜関西＞<br/>
                    <b>イセタン メンズスタイル</b><br/><br/>

                    〒530-8558 大阪市北区梅田3-1-3 ルクア イーレ8F<br/>
                    TEL 06-4301-3922<br/>
                    営業時間 10:00〜21:00
                </div>
            </section>
        </div>*/}

        <div style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                textAlign:"center",
                minHeight: "calc(100vh - 300px)",
            }}>
            <div className="text">
                ＜関西＞<br/>
                <b>イセタン メンズスタイル</b><br/><br/>

                〒530-8558<br/>
                大阪市北区梅田3-1-3<br className="mobile"/>
                ルクア イーレ8F<br/><br/>
                TEL 06-4301-3922<br/>
                営業時間 10:00〜21:00
            </div>
        </div>

    </div>
)

export const Contact = () => (
    <div className="Contact">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title={TITLE + " | Contact"} />
        <h1 className="page-title">お問い合わせ<br/><span className="en">Contact</span></h1>

        <div className="article">
            <p>お問い合わせの前に、必ず下記の注意事項をご確認ください。</p>

            <h2>お問い合わせいただく前の注意事項</h2>
            <p>
                ・お問い合わせにつきましては、順次対応させていただいておりますが、
                営業時間外に送信いただいたものへのお返事にはお時間を頂戴する場合がございます。
                また、お問い合わせの内容によりましてはお時間を頂戴する場合やお返事を差し上げられない
                場合がございます。電子メール以外の方法で回答を差し上げる場合もございますので、
                あらかじめご了承ください。
            </p>
            <p>
                ・当社からの回答は、お問い合わせいただいたお客様の特定のご質問にお答えするものです。
                回答内容の一部分もしくは全体を転用、二次利用し、または当該お客様以外に開示することはご遠慮ください。
            </p>

            <p>
                ・お問い合わせ内容に応じてお客様との早急なコミュニケーションを図るために、お問い合わせの際には、
                お名前、ご住所、お電話番号、メールアドレス、（以下、個人情報）をご入力いただくこととしております。
                お客様からいただく個人情報は、お問い合わせ・ご質問への回答、情報提供のために使用させていただきます。
            </p>

            <p>
                ・お客様のメール設定で、着信制御をされている場合、当社からの返信が届かないことがございます。
                あらかじめご了承ください。
            </p>

            <div className="link">
                <DelayLink to="http://maylily.co.jp/contact/">
                    <SvgButton width={245}>お問い合わせフォーム</SvgButton>
                </DelayLink>
            </div>
        </div>
    </div>
)

export const TermsOfUse = () => (
    <div className="TermsOfUse">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title={TITLE + " | Terms of use"} />
        <h1 className="page-title">利用規約<br/><span className="en">Terms of Use</span></h1>

        <div className="article">
            <h2>はじめに</h2>

            <p>
                ガーメントウェブサイト（以下、「本ウェブサイト」といいます）は
                有限会社メイリリィ（以下、「当社」といいます）、またはその代理人が運営しております。
                本ウェブサイトをご利用されることをもちまして、お客様は以下の利用規約に同意したものとみなされます。
                <br/>なお、本利用規約は事前の予告なしに変更される場合がありますので、
                    最新の内容をご確認いただきますようお願い申し上げます。
            </p>


            <h2>第１条　利用規約の適用範囲</h2>
            <p>本利用規約は、本ウェブサイトを利用する全ての方（以下、「利用者」といいます）に適用されます。</p>

            <h2>第２条　著作権その他の権利について</h2>
            <p>
            本ウェブサイトに掲載されている全ての内容（画像、音声、動画および文章等を含む）に関する権利は当社が
            所有しているか、またはライセンスその他の正当な権限にもとづき使用するものです。
            <br/>したがって、著作権法により許されている場合を除き、いかなる方法、目的においても、
            本ウェブサイトの掲載内容全部につき、使用（複製、改変、転載及び頒布等を含む）することは禁止します。
            </p>

            <h2>第３条　商標について</h2>
            <p>
            本ウェブサイトに掲載されている全ての商標およびサービスマークは、当社もしくは当社の関連会社が所有し、
            またはライセンスその他の正当な権限にもとづいて使用するものです。
            <br/>したがって、当社の文書による事前の許諾がない限り、これらを無断で使用することは禁止します。
            </p>

            <h2>第４条　掲載情報について</h2>
            <p>
            本ウェブサイトに掲載されている情報は、掲載時点における情報であり、
            掲載した時点以降に予告なく変更される場合があります。
            当社はそれら情報の正確性や適時性について何ら保証するものではなく、
            かつそのそれらから発生した紛争や損害についても一切責任を負いません。
            </p>

            <h2>第５条　本ウェブサイトへのリンクについて</h2>
            <p>
            本ウェブサイトへのリンクは原則として自由です。
            ただし、以下の内容が含まれるウェブサイトからのリンクは固くお断りします。
            </p>

            <p>１）公序良俗に反する内容</p>
            <p>２）諸法令に違反する内容</p>
            <p>３）当社（関係会社を含む）または当社の関係者を誹謗中傷する内容</p>
            <p>４）その他当社の企業価値を毀損すると客観的に判断できる内容</p>

            <p>
            本ウェブサイトから張られている第三者サイトへのリンクは、利用者への便宜のためにご提供しているものであり、
            その内容について当社が保証および認可したものではありません。
            <br/>したがって、当社は、当該第三者サイトの内容または当該第三者サイトの使用に関連して利用者に発生した
            いかなる損害に対しても責任を負いません。
            </p>

            <h2>第６条　禁止事項</h2>
            <p>利用者は、本ウェブサイトを利用するに際し、以下の行為をしてはならないものとします。</p>

            <p>１）当社または第三者を誹謗または中傷したり名誉を毀損する行為、またはそれらのおそれのある行為</p>
            <p>２）当社または第三者の財産権やプライバシーを侵害する行為、または侵害するおそれのある行為</p>
            <p>
                ３）当社または第三者の知的財産権（著作権、意匠権、特許権、実用新案権、商標権、肖像権等）、
                その他の権利を侵害する行為、または侵害するおそれのある行為
            </p>
            <p>４）本ウェブサイトまたは当社が提供する情報を営利目的に使用する行為、またはその準備を目的とする行為</p>
            <p>５）他の利用者による本ウェブサイトにおける当社サービスの利用もしくはアクセスを妨げる行為</p>
            <p>６）有害なコンピュータプログラム、および偽装ファイル等を送信し、または書き込む行為</p>
            <p>７）公序良俗または法律もしくは法令に反する、またはそのおそれのある行為</p>
            <p>８）犯罪的行為に結びつく、またはそのおそれのある行為</p>
            <p>
                ９）政治、宗教、選挙活動及びそれに類する話題、特定の個人への侮辱、わいせつな内容、
                当社に対する不利益が発生するような発言や行為
            </p>
            <p>１０）その他、当社が不適切であると判断する行為</p>

            <h2>第７条　免責事項</h2>
            <p>
                本ウェブサイトに掲載されている情報、または本ウェブサイトを利用することで発生したトラブルや損失、
                損害に対して、当社は一切責任を負いません。
                <br/>すべての商品の希望小売価格および仕様、発売時期、発売場所等は、予告なく変更されることがあります。
                また、予告なしに本ウェブサイトに掲載した情報を変更することがあり、あるいは本ウェブサイトの運営を
                中断または中止させていただくことがありますので、あらかじめ御了承ください。
                <br/>なお、当社は理由の如何に関わらず、情報の変更および本ウェブサイトの運営の中断または中止によって
                生じるいかなる損害についても責任を負うものではありません。
                また、当社は、本ウェブサイトにリンクしている他のいかなるウェブサイトの内容にも責任を負いません。
            </p>

            <h2>第８条　準拠法及び管轄裁判所</h2>
            <p>
                本ウェブサイトならびに本利用規約の解釈および適用は、日本国法に準拠します。
                <br/>また、本ウェブサイトに関わる全ての紛争については、他に別段の定めのない限り、
                横浜地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
        </div>
    </div>
)

export const PrivacyPolicy = () => (
    <div className="PrivacyPolicy">
        <EdgeLine/>
        <ScrollToTopOnMount />
        <DocumentTitle title={TITLE + " | Privacy policy"} />
        <h1 className="page-title">個人情報保護方針<br/><span className="en">Privacy Policy</span></h1>

        <div className="article">
            <p>
                有限会社メイリリィ及びその関連会社（以下、「当社」といいます）は、
                ガーメントウェブサイト （以下、「本ウェブサイト」といいます）を
                訪れる全てのお客様の個人情報の保護に努めます。
            </p>
            <h2>１．	個人情報の定義</h2>
            <p>
            個人情報とは当社が本ウェブサイトを通じてお客様から提供を受ける住所、
            氏名、年齢、電話番号、メールアドレス、その他の個人を識別できる情報をいいます。
            </p>

            <h2>２．個人情報の収集</h2>
            <p>
            お客様が本ウェブサイトにアクセスする際にお客様の個人情報をご提供いただく必要はありません。
            ただし、特定のキャンペーンにご参加される場合には、個人情報が提供されないと
            当該キャンペーンに参加できないことがありますので、あらかじめご了承ください。
            </p>

            <h2>３．個人情報の利用目的</h2>
            <p>
            お客様の個人情報は、当社のマーケティング活動のため、より良い商品、
            サービスをご提供するために利用させていただきます。
            また、会社や商品、サービスに関するお問い合わせ、およびご応募などをいただく際に
            登録されている方が本人であるか否かを確認するための情報としても使用いたします。
            </p>

            <p>１）当社が提供するサービス（各種キャンペーン、イベント等）についてのご案内</p>
            <p>２）当社が行う調査、アンケートなどに関するご連絡</p>
            <p>３）当社へ寄せられたお問い合わせ、ご相談等への適切な対応および記録、整理</p>
            <p>４）商品、サービスの研究、開発のための分析</p>

            <h2>４．個人情報の管理</h2>
            <p>
            当社は、保有する個人情報を正確かつ最新の状態に保ち、また、個人情報への不正アクセス、
            紛失、破損、改ざん、漏洩などを防止するため、セキュリティシステムの維持、管理体制の整備、
            社員教育の徹底等の必要な措置を講じ、個人情報の厳重な管理を行ないます。
            </p>

            <h2>５．個人情報の第三者への提供</h2>
            <p>
            当社は、本ウェブサイトにおいてお客様より個人情報をご提供いただいた場合には、
            次の場合を除き、個人情報を第三者に提供することはありません。
            </p>

            <p>１）法令にもとづく個人情報の開示請求がなされた場合</p>
            <p>２）お客様もしくは一般公衆または当社従業員の生命、
            身体または財産等の保護あるいは防御のため必要のある場合</p>
            <p>３）キャンペーンの実施のため、機密保持契約を締結した協力会社、
            提携会社および業務委託会社に開示する必要がある場合</p>

            <h2>６．個人情報の開示、訂正、利用停止、削除など</h2>
            <p>
            ご提供いただいた個人情報の内容に関して、開示、訂正、利用停止、削除などをご希望される場合は、
            当社のお問い合わせ窓口までご連絡下さい。ご要望いただいた方がご本人であることが確認された後、
            誠実かつ合理的な期間内に対応させていただきます。
            </p>

            <h2>７．法令遵守</h2>
            <p>
            当社は、個人情報の取り扱いにおいて個人情報の保護に関する法律及び関連する政省令並びに
            その他のガイドラインを遵守します。
            </p>

            <h2>８．個人情報に関するお問い合わせ窓口</h2>
            <p>当社の個人情報の取り扱いに関するお問い合わせについては、こちらからお願い致します。</p>

            <div className="link">
                <Link to="/garment/contact">
                    <SvgButton>お問い合わせ</SvgButton>
                </Link>
            </div>
        </div>
    </div>
)
