import React,{Component,Fragment} from "react";
import List from "./components/list";
import Add from "./components/add";
import Modify from "./components/modify";
class App extends Component{
    constructor(){
        super();
        this.state = {
            flag:true
        }
    }
    render(){
        let {flag} = this.state;
        return  (
            <Fragment>
              {flag?<Add/>:<Modify/>}
              <List/>
            </Fragment>
           
        )
    }
   
    
    
}

export default App;
