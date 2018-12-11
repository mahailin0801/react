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

/*

    1、 默认值的使用

    组件名称.defaultProps = {
        key:val
    }



    2、this.props是用来接受外部属性  


    3、 render函数什么时候会执行？
        当this.state、this.porps发生改变的时候render函数就会执行



    4、组件传值：
        父传子：
            当子组件在父组件中当做标签使用的时候 通过自定义属性进行传值，接受的时候通过this.props进行接受

        子传父：
           当子组件在父组件中当做标签使用的时候  调用父组件的方法进行传值
           
           
        默认值的只要  组件.defaultProps = {}


    5、数据类型的校验
        1、安装
            cnpm install prop-types --save-dev

        2。引入
            import PropTypes from "prop-types";

        3、校验
            组件名称.propTypes = {
                key:PropTypes.类型
            }

    6、如何接受组件标签内部包裹的元素
            this.props.children

    
    
    7、如何强制更新数据
        this.forceUpdate()



        

        optionalArray: PropTypes.array,
        optionalBool: PropTypes.bool,
        optionalFunc: PropTypes.func,
        optionalNumber: PropTypes.number,
        optionalObject: PropTypes.object,
        optionalString: PropTypes.string,
        optionalSymbol: PropTypes.symbol,


        optionalNode: PropTypes.node,

        // 一个 React 元素
        optionalElement: PropTypes.element,

        // 你也可以声明属性为某个类的实例，这里使用 JS 的
        // instanceof 操作符实现。
        optionalMessage: PropTypes.instanceOf(Message),

        // 你也可以限制你的属性值是某个特定值之一
        optionalEnum: PropTypes.oneOf(['News', 'Photos']),

        // 限制它为列举类型之一的对象
        optionalUnion: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Message)
        ]),

        // 一个指定元素类型的数组
        optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

        // 一个指定类型的对象
        optionalObjectOf: PropTypes.objectOf(PropTypes.number),
*/