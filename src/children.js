import React from 'react';
import ReactDOM from 'react-dom';
// 子组件 向 父组件 传递
// 换句话说，父组件显示子组件的信息
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