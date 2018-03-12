import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';


ReactDom.render(
    <AppContainer>
        <h1>Hello World!</h1>
    </AppContainer>,
    document.getElementById('app')
);