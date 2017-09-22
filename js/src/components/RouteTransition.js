import React from 'react'
import { TransitionMotion, spring } from 'react-motion'

export default class TransitionMotionDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{ key: '1' }, { key: '2' }, { key: '3' }],
        }
        this.deleteElem = this.deleteElem.bind(this)
        this.willLeave = this.willLeave.bind(this)
        this.willEnter = this.willEnter.bind(this)
    }

    deleteElem() {
        const items = this.state.items
        items.pop()
        this.setState({
            items,
        })
    }
    willLeave() {
        return { width: spring(0), height: spring(0) }
    }
    willEnter() {
        // return { width: spring(0), height: spring(0) }
    }

    render() {
        return (
            <div>
                <TransitionMotion
                    willLeave={this.willLeave}
                    willEnter={this.willEnter}
                    defaultStyles={this.state.items.map(item => ({
                        key: item.key,
                        style: { width: 0, height: 0 },
                    }))}
                    styles={this.state.items.map(item => ({
                        key: item.key,
                        style: { width: spring(1000), height: spring(100) },
                    }))}>
                    {interpolatedStyles =>
                        <div>
                            {interpolatedStyles.map(config => {
                                return (
                                    <div key={config.key} style={{ border: '1px solid', height: config.style.height, width: config.style.width, fontSize: '40px' }}>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </TransitionMotion>
                <button onClick={this.deleteElem}>
                    ここを押すと最後の要素の削除が始まってwillLeaveアニメーションスタート
                </button>
            </div>
        )
    }
}
