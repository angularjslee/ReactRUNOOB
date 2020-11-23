import React from 'react';
import ReactDOM from 'react-dom';

function MyInput(props) {
    return (
    <div>
        <label>{props.item}: </label>
        <input placeholder={props.myPlaceholder}></input>
    </div>
    )
    
}
function MyButton(props) {
    return <button>{props.action}</button>;
}

function MyForm() {
    return (
    <div>
        <p>这是 组件练习</p>
        <MyInput item="Username" myPlaceholder="Please input the user name"/>
        <MyInput item="Password" myPlaceholder="Please input the user pwd"/>
        <MyButton action="注册" />
        <MyButton action="登录" />
        <hr></hr>
    </div>
    );
}
 
ReactDOM.render(
     <MyForm />,
    document.getElementById('componentExer')
);