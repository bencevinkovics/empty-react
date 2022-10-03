import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

const title = "Helloka, this is title";

ReactDom.render(
    <App title={title} />,
    document.getElementById('app')
);

console.log("helloka");