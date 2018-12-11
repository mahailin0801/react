import React,{Component,Fragment} from "react";
import Input from "./components/input";
import List from "./components/list";
class App extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        return  (
            <Fragment>
                <Input/>
                <List/>
            </Fragment>
           
        )
    }
   
    
    
}

export default App;
