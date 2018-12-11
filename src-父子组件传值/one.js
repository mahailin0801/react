import React,{Component} from "react";

class One extends Component{
    render(){
        let {info} = this.props;
       
        return (
            <div>
                <h2>接收到父组件的值为:{info}</h2>
                <button onClick={this.handleClick.bind(this)}>点击</button>
            </div>
        )
    }
    handleClick(){
        this.props.show("子组件值")
    }
}
One.defaultProps = {
    info:"默认值"
}
export default One;

/*

    默认值的使用

    组件名称.defaultProps = {
        key:val
    }



    this.props是用来接受外部属性  


    render函数什么时候会执行？
        当this.state、this.porps发生改变的时候render函数就会执行



    组件传值：
        父传子：
            当子组件在父组件中当做标签使用的时候 通过自定义属性进行传值，接受的时候通过this.props进行接受

        子传父：
           当子组件在父组件中当做标签使用的时候  调用父组件的方法进行传值
           
           
        默认值的只要  组件.defaultProps = {}
*/