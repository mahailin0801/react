import React,{Component} from "react";
import Observer from "../observer"
export default class List extends Component {
    constructor(){
        super();
        this.state = {
            List:[]
        }

        Observer.$on("handle",(params)=>{
            this.setState({
                List:[...this.state.List,params]
            })
        })
    }
    render(){
        let {List} = this.state;
        return (
            <ul>
                {
                    List.map((item,index)=>{
                        return <li key={index}>
                            <p>{item.name}</p>
                            <p>{item.age}</p>
                            <p>{item.sign}</p>
                            <button>修改</button>
                            <button>删除</button>
                        </li>
                    }) 
                }
            </ul>
        )
    }
}