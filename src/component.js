import React from 'react';
import ReactDOM from 'react-dom';

function HelloMessage(props) {
    return <h1>This is component</h1>;
}
 
const element = <HelloMessage />;
 
ReactDOM.render(
    element,
    document.getElementById('component')
);


function Name(props) {
    return <p>网站名称：{props.name}</p>;
}
function Url(props) {
    return <p>网站地址：{props.url}</p>;
}
function Nickname(props) {
    return <p>网站小名：{props.nickname}</p>;
}
function App() {
    return (
    <div>
        <p>这是 复合组件</p>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
        <hr></hr>
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('composite')
);