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

                <section>
                    <Calendar>2017.10.21</Calendar>
                    <p className="text">
                        新宿伊勢丹 サロンドパルファン<br/>
                        ガーメントイベント 開催<br/>
                        申し込みは下記アドレスからお願い致します。<br/>
                    </p>
                    <DelayLink to="http://isetan.mistore.jp/store/shinjuku/floor/main_1f/beauty/index.html;jsessionid=GB85ZJQSQ1KRW6qHcC6TjygBKhT6RvQJ8QHR7kBn1JCL4J91n0P8!-675519718">
                        <SvgButton>isetan.mistore.jp</SvgButton>
                    </DelayLink>
                </section>

                <section>
                    <Calendar>2017.10.18</Calendar>
                    <p className="text">
                        新宿伊勢丹 サロンドパルファン 出展
                    </p>
                </section>

                <section>
                    <Calendar>2017.07.10</Calendar>
                    <p className="text">
                        イセタンメンズサロン 大阪<br/>
                        ガーメント定番販売開始
                    </p>
                </section>

            </div>
        )
    }
}

const Calendar = props => (
    <p className="calendar">{props.children}</p>
)
