import React,{Component} from "react";

export default class Modify extends Component {
    render(){
        return (
            <div className="add">
                <label>
                    姓名:<input type="text" />
                </label>
                <br/>
                <label>
                    年龄:<input type="text" />
                </label>
                <br/>
                <label>
                    个性签名:<input type="text" />
                </label>
                <br/>
                <button>修改</button>
            </div>
        )
    }
}