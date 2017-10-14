import React from "react"

import DelayLink from "./DelayLink"
import SvgButton from "./SvgButton"

// import FaCalendar from "react-icons/lib/fa/calendar"
// MdTimer react-icons/lib/md/timer
import MdToday from "react-icons/lib/md/today"
import MdNotificationsActive from "react-icons/lib/md/notifications-active"
// import MdNotifications from "react-icons/lib/md/notifications"
import MdLabelOutline from "react-icons/lib/md/label-outline"

export default class News extends React.Component{
    render(){
        return (
            <div className="News">
                <h1 className="common-title"><span className="icon"><MdNotificationsActive/></span> NEWS</h1>

                <div className="flex-2">

                    <NewsSection date="2017.11.01" hot>
                        新宿伊勢丹 定番販売開始
                    </NewsSection>

                    <NewsSection date="2017.10.21" hot>
                        新宿伊勢丹 サロンドパルファン<br/>
                        ガーメントイベント 開催<br/>
                        申し込みは下記アドレスからお願い致します。
                        <DelayLink to="http://isetan.mistore.jp/store/shinjuku/floor/main_1f/beauty/index.html;jsessionid=GB85ZJQSQ1KRW6qHcC6TjygBKhT6RvQJ8QHR7kBn1JCL4J91n0P8!-675519718">
                            <SvgButton size={17} width={200}>ISETAN.MISTORE.JP</SvgButton>
                        </DelayLink>
                    </NewsSection>

                    <NewsSection date="2017.10.18" hot>
                        新宿伊勢丹 サロンドパルファン 出展
                    </NewsSection>

                    <NewsSection date="2017.07.10">
                        イセタンメンズサロン 大阪<br/>
                        ガーメント定番販売開始
                    </NewsSection>

                </div>{/* flex-2 */}

            </div>
        )
    }
}

const NewsSection = props => (
    <section className={`NewsSection ${props.hot && "hot"}`}>
        <div className="inner"></div>
        <div className="calendar">{props.date}</div>
        <div className="text">
            {props.children}
        </div>
    </section>
)
