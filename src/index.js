const React = require('react');


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
        let { isLoading, children } = this.props;

        if (isLoading) {
            let { width, height, margin, style } = this.props;

            loading_style.width = width;
            loading_style.height = height;
            loading_style.margin = margin;

            return (
                <div style={Object.assign({}, loading_style, style)}>
                    <style>{animation}</style>
                    <svg style={svg_style} viewBox="25 25 50 50">
                        <circle style={circle_style} cx="50" cy="50" r="20" fill="none" strokeWidth="7" strokeMiterlimit="10"/>
                    </svg>
                </div>
            );
        } else {
            return (<div>{children || null}</div>);
        }
    }
}


Loading.propTypes = {
    isLoading: React.PropTypes.bool,
    style: React.PropTypes.object,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    margin: React.PropTypes.string
};


Loading.defaultProps = {
    isLoading: true,
    style: {},
    width: '40px',
    height: '40px',
    margin: '0 auto'
};


module.exports = Loading;
