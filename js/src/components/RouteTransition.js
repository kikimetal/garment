import React from 'react';
import { TransitionMotion, spring } from 'react-motion';


const willEnter = () => ({
    opacity: 0,
    // scale: 0.7
    blur: 20,
    // translate: 60
});

const willLeave = () => ({
    // opacity: spring(-1, {stiffness: 2, damping: 5, precision: 0.1}),
    // scale: spring(1.3)
    // blur: spring(20, {stiffness: 7, damping: 5, precision: 0.05}),
    // translate: spring(-100)
});

const springOption = {stiffness: 86, damping: 20, precision: 0.5}

const getStyles = () => ({
    opacity: spring(1, springOption),
    // scale: spring(1)
    blur: spring(0, springOption),
    // translate: spring(0, springOption),
});

const RouteTransition = ({ children: child, pathname }) => (
    <TransitionMotion
        styles={ [{
            key: pathname,
            style: getStyles(),
            data: { child }
        }] }
        willEnter={ willEnter }

        >
        { (interpolated) =>
            <div>
                {interpolated.map(({ key, style, data }) =>
                    <div
                        key={ `${key}-transition` }
                        style={ {
                            minHeight: "100vh",
                            position: "absolute",
                            width: "100%",
                            opacity: style.opacity,
                            transform: `translateY(${style.translate}px)`,
                            filter: `blur(${style.blur}px)`,
                        } }
                        >
                        { data.child }
                    </div>
                )}
            </div>
        }
    </TransitionMotion>
)

// filter: `blur(${style.blur}px)`

// transform: `scale(${style.scale})`

export default RouteTransition;
