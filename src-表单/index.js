import React from "react";
import ReactDom from "react-dom";
import App from "./App";


ReactDom.render(
    <App/>,
    document.querySelector("#root"),
    ()=>{
        console.log("渲染成功");
    }
)