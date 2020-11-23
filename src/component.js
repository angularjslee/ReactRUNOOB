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
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <h1>这是 复合组件</h1>
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