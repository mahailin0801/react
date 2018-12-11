import React ,{Component} from "react";
import Observer from "./observer";
export default class Two extends Component{
    constructor(){
        super();
        this.state = {
            val:""
        }
        Observer.$on("handle",(params)=>{ 
            this.setState({
                val:params
            })
            
        })

    }
  
    render(){
        let {val} = this.state;
        return (
            <div className="two">
                <h1>two组件</h1>
                <h2>接受到One组件的值为:{val}</h2>
            </div>
        )
    }
}