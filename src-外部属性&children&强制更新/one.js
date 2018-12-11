import React,{Component} from "react";
import Observer from "./observer";
import PropTypes from "prop-types";
class One extends Component{
    constructor(){
        super();
        this.state = {
            message:"我是one组件"
        }

        this.age = 20;
    }
    render(){
        let {name} = this.props;
        return (
            <div  className="one">
                <p>我的年龄：{this.age}</p>
                <button onClick={this.handleChange.bind(this)}>改变年龄</button>
                <h2>one组件</h2>
               <button onClick={this.handleSend.bind(this)}>发送给Two组件</button>
               <h3>接收到父组件的值为:{name}</h3>
               {this.props.children}
            </div>
        )
    }
    handleChange(){
        this.age = 18;
        //强制更新
        this.forceUpdate();
    }
    handleSend(){
        
        Observer.$emit("handle",this.state.message)
    }
   
}

One.propTypes = {
    name:PropTypes.string
}


export default One;

