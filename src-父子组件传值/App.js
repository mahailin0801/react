import React,{Component}from "react";
import One from "./one";
class App extends Component{
    
    constructor(){
        super();
        this.state = {
           message:"123",
           oneVal:""
        }
    }

    render(){
       let {message,oneVal} = this.state;
        return  (
            <div>
                <One info={message} show={this.handleShow.bind(this)}/>
                <h2>接受到子组件的值为：{oneVal}</h2>
            </div>
           
        )
    }
    handleShow(val){
        this.setState({
            oneVal:val
        })
    }
    
    
}

export default App;
