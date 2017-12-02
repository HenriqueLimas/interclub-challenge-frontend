import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'

import Root from './components/Root'
import configureStore from './configureStore'

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body,
    html {
        margin: 0;
        padding: 0;
        width: 100vw;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        font-size: 14px;
    }
`

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
