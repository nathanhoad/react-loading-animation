const React = require('react');
const { shallow } = require('enzyme');
const { expect } = require('code');

const Loading = require('../lib');


describe('Spinner', () => {
    
    it('renders with no props', (done) => {
        let loader = shallow(<Loading />);
        
        expect(loader.html()).to.contain("<svg");
        expect(loader.html()).to.contain("<circle");
        expect(loader.html()).to.contain("</svg>");
        
        done();
    });
    
    
    it('renders with children', (done) => {
        let loader = shallow(
            <Loading isLoading={true}>
                <div>Child 1</div>
                <div>Child 2</div>
            </Loading>
        );
        expect(loader.html()).to.contain("<svg");
        expect(loader.html()).to.contain("<circle");
        expect(loader.html()).to.contain("</svg>");
        expect(loader.html()).to.not.contain("Child 1");
        expect(loader.html()).to.not.contain("Child 2");
        
        loader = shallow(
            <Loading isLoading={false}>
                <div>Child 1</div>
                <div>Child 2</div>
            </Loading>
        );
        expect(loader.html()).to.not.contain("<svg");
        expect(loader.html()).to.not.contain("<circle");
        expect(loader.html()).to.not.contain("</svg>");
        expect(loader.html()).to.contain("Child 1");
        expect(loader.html()).to.contain("Child 2");
        
        done();
    });
    
});