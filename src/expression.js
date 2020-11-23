import React from 'react';
import ReactDOM from 'react-dom';

let i = 2; 

ReactDOM.render(
    <div>
        <h1>This is Expression</h1>
        <p>{i == 1 ? 'True!' : 'False'}</p>
        <hr></hr>
    </div>
    ,
    document.getElementById('expression1')
);