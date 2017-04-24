const React = require('react');
const { shallow } = require('enzyme');
const { test } = require('ava');

const Loading = require('../lib');


test('renders with no props', t => {
    let loader = shallow(<Loading />);
    
    
    t.not(loader.html().indexOf("<svg"), -1);
    t.not(loader.html().indexOf("<circle"), -1);
    t.not(loader.html().indexOf("</svg>"), -1);
});


test('renders with no props and style', t => {
    let loader = shallow(<Loading style={{display: 'inline-block', color: '#123456', marginLeft: '30px', top: '10px'}} />);

    t.not(loader.html().indexOf("display:inline-block"), -1);
    t.not(loader.html().indexOf("color:#123456"), -1);
    t.not(loader.html().indexOf("margin-left:30px"), -1);
    t.not(loader.html().indexOf("top:10px"), -1);
    t.not(loader.html().indexOf("<svg"), -1);
    t.not(loader.html().indexOf("<circle"), -1);
    t.not(loader.html().indexOf("</svg>"), -1);
});


test('renders with children', t => {
    let loader = shallow(
        <Loading isLoading={true}>
            <div>Child 1</div>
            <div>Child 2</div>
        </Loading>
    );
    
    t.not(loader.html().indexOf("<svg"), -1);
    t.not(loader.html().indexOf("<circle"), -1);
    t.not(loader.html().indexOf("</svg>"), -1);
    t.is(loader.html().indexOf("Child 1"), -1);
    t.is(loader.html().indexOf("Child 2"), -1);

    loader = shallow(
        <Loading isLoading={false}>
            <div>Child 1</div>
            <div>Child 2</div>
        </Loading>
    );
    
    t.is(loader.html().indexOf("<svg"), -1);
    t.is(loader.html().indexOf("<circle"), -1);
    t.is(loader.html().indexOf("</svg>"), -1);
    t.not(loader.html().indexOf("Child 1"), -1);
    t.not(loader.html().indexOf("Child 2"), -1);
});
