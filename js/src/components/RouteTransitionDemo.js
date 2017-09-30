import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

const springOption = {stiffness: 50, damping: 20, precision: 0.5}

const willLeave = () => ({
    // opacity: spring(0, springOption),
    // scale: spring(1.3)
    // blur: spring(20, {stiffness: 7, damping: 5, precision: 0.05}),
    // translate: spring(-30),
    // scale: 1.1
});

const willEnter = () => ({
    // opacity: 0,
    // scale: 0.7
    blur: 10,
    // translate: 30,
    // scale: 1.1,
});

const getStyles = () => ({
    // opacity: 1,
    // opacity: spring(1, springOption),
    // scale: spring(1)
    blur: spring(0, springOption),
    // translate: spring(0, springOption),
    // scale: spring(1, springOption),
});

const RouteTransition = ({ children: child, pathname, className}) => (
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
                        className={`RouteTransitionContainer ${className}`}
                        key={ `${key}-transition` }
                        style={{
                            // opacity: style.opacity,
                            filter: `blur(${style.blur}px)`,
                        }}
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
