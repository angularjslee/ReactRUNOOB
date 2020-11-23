import React from 'react';
import ReactDOM from 'react-dom';

function MyList(props) {
    return <ul>
        {
            React.Children.map(
                props.children, 
                function (child) {
                    return child
                }
            )
        }
    </ul>;
}
 
ReactDOM.render(
    <MyList>
        <li>1</li>
        <li>2</li>
    </MyList>,
    document.getElementById('children')
);