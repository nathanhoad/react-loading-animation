const React = require('react');
const PropTypes = require('prop-types');


const loading_style = {
    position: 'relative',
    margin: '0px auto',
    width: '40px',
    height: '40px',
};

const svg_style = {
    animation: 'rotate 2s linear infinite',
    height: '100%',
    transformOrigin: 'center center',
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
};

const circle_style = {
    strokeDasharray: '1,200',
    strokeDashoffset: '0',
    animation: 'dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite',
    strokeLinecap: 'round'
};


const animation = `@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes dash {
    0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89,200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89,200;
        stroke-dashoffset: -124px;
    }
}
@keyframes color {
    100%, 0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%, 90% {
        stroke: #ffa700;
    }
}`;


class Loading extends React.Component {
    render () {
        let { component, className, isLoading, children } = this.props;

        if (isLoading) {
            let { width, height, margin, style, strokeWidth } = this.props;

            loading_style.width = width;
            loading_style.height = height;
            loading_style.margin = margin;

            return React.createElement(
                component,
                { style: Object.assign({}, loading_style, style) },
                <style>{animation}</style>,
                <svg style={svg_style} viewBox="25 25 50 50">
                    <circle style={circle_style} cx="50" cy="50" r="20" fill="none" strokeWidth={strokeWidth} strokeMiterlimit="10"/>
                </svg>
            );
        } else {
            return React.createElement(component, { className }, children || null);
        }
    }
}


Loading.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    style: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    component: PropTypes.any
};


Loading.defaultProps = {
    className: '',
    isLoading: true,
    style: {},
    width: '40px',
    height: '40px',
    margin: '0 auto',
    component: 'div',
    strokeWidth: '7'
};


module.exports = Loading;


// Polyfills
if (typeof Object.assign != 'function') {
    Object.assign = function(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) { // Skip over if undefined or null
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}
