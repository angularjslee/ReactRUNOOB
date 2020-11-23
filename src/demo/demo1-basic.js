import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        <h1>Hello React</h1>
        <h1>{true && 50}</h1>
        <p>{3 > 2 ? 'true' : 'false'}</p>
        
    </div>,
    document.getElementById('demo1')
)