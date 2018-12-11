import React,{Component,Fragment} from "react";
import Observer from "../observer";
export default class List extends Component{
    constructor(){
        super();
        this.state = {
            todoList:[]
        }
        Observer.$on("handle",(params)=>{
            this.setState({
                todoList:[...this.state.todoList,params]
            })
        })

    }
    render(){
        let {todoList} = this.state;
        return (
           <ul>
                {
                    todoList.map((item,index)=>{
                        return <li key={index}>{item}
                            <button onClick={this.handleDel.bind(this,index)}>删除</button>
                        </li>
                    })
                }
           </ul>
        )
    }
    handleDel(index){
        let arr = this.state.todoList;
        arr.splice(index,1);
        this.setState({
            todoList:arr
        })
    }
}