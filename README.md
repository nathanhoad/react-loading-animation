# React Loading Animation

![](https://codeship.com/projects/1d909030-61f0-0134-dd2d-36e4b4e4e227/status?branch=master)

A simple loading component to show a colorful animated spinner.


## Usage

```javascript
const Loading = require('react-loading-animation');
```

You can either render the component directly (with no props) or render it as a parent
of other components and pass in `isLoading` as a prop:

```javascript
const ListOfThings = ({ isFetching, things }) => {
    if (isFetching && things.size() == 0) return <Loading />;
    
    return (
        <ul>
            ...
        </ul>
    );
}
```

or

```javascript
const ListOfThings = ({ isFetching, things }) => {
    return (
        <Loading isLoading={isFetching && things.size() == 0}>
            <ul>
                ...
            </ul>
        </Loading>
    );
}
```


## Thanks

This component is based on the work at [https://codepen.io/jczimm/pen/vEBpoL](https://codepen.io/jczimm/pen/vEBpoL)