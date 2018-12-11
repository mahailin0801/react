import React,{Component,Fragment} from "react";
import Observer from "../observer";
export default class Input extends Component{
    constructor(){
        super();
        this.state = {
            inputVal:""
        }
    }
    render(){
        let {inputVal}  = this.state;
        return (
           <Fragment>
            <input type="text" value={inputVal} onChange={this.handleChange.bind(this)}/>
            <button onClick={this.handleAdd.bind(this)}>添加</button>
           </Fragment>
        )
    }
    handleChange(e){
        let val = e.target.value;
        this.setState({
            inputVal:val
        })
    }
    handleAdd(){
        Observer.$emit("handle",this.state.inputVal)
        this.setState({
            inputVal:""
        })
    }
}