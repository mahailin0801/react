import React, { Component } from "react";
import Observer from "../observer";
export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            sign: ""
        }
    }
    render() {
        let { name, age, sign } = this.state;
        return (
            <div className="add">
                <label>
                    姓名:<input type="text" value={name} onChange={this.handleChange.bind(this, 1)} />
                </label>
                <br />
                <label>
                    年龄:<input type="text" value={age} onChange={this.handleChange.bind(this, 2)} />
                </label>
                <br />
                <label>
                    个性签名:<input type="text" value={sign} onChange={this.handleChange.bind(this, 3)} />
                </label>
                <br />
                <button onClick={this.handleAdd.bind(this)}>添加</button>
            </div>
        )
    }
    handleAdd(){
        let obj = {};
        obj.name = this.state.name;
        obj.age = this.state.age;
        obj.sign = this.state.sign;
        Observer.$emit("handle",obj)
    }
    handleChange(n, e) {
        let val = e.target.value;
        switch (n) {
            case 1:
                this.setState({
                    name: val
                });
                break;
            case 2:
                this.setState({
                    age: val
                });
                break;
            case 3:
                this.setState({
                    sign: val
                });
                break;
            default:
                return
        }

    }
}