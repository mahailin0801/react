import React,{Component}from "react";
import One from "./one";
import Two from "./two";
import "./index.css";
class App extends Component{
    constructor(){
        super();
        this.state = {
            val:"杨雄"
        }
    }
    render(){
        let {val} = this.state
        return  (
            <div>
               <One name={val}>
                    <p>111</p>
                    <p>222</p>
                    <p>333</p>
               </One>
               <Two/>
            </div>
           
        )
    }
   
    
    
}

export default App;
