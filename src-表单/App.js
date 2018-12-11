import React,{Component}from "react";

class App extends Component{
    
    constructor(){
        super();
        this.state = {
            radioVal:"男",
            checkVal:[],
            selectVal:"1994"
        }
    }

    render(){
        let {radioVal,checkVal,selectVal} = this.state;
        return  (
            <div>
                <label>
                    <input type="radio" 
                        value="男" 
                        checked={radioVal==="男"}
                        onChange={this.handleRadio.bind(this)}
                        />男
                </label>
                <label>
                    <input type="radio" 
                        value="女" 
                        checked={radioVal==="女"}
                        onChange={this.handleRadio.bind(this)}
                        />女
                </label>
                <p>您选择的性别是----{radioVal}</p>
                <hr/>
                <label>
                    <input type="checkbox" 
                    value="德玛西亚" 
                    onChange={this.handleCheckChange.bind(this)}
                    />德玛西亚
                </label>
                <label>
                    <input type="checkbox" 
                    value="诺克萨斯" 
                    onChange={this.handleCheckChange.bind(this)}
                    />诺克萨斯
                </label>
                <label>
                    <input type="checkbox" 
                    value="艾欧尼亚" 
                    onChange={this.handleCheckChange.bind(this)}
                    />艾欧尼亚
                </label>
                <label>
                    <input type="checkbox" 
                    value="王者荣耀" 
                    onChange={this.handleCheckChange.bind(this)}
                    />王者荣耀
                </label>
                {/* 复杂数据类型如果数据发生了改变  不会自动进行遍历*/}
                <p>您选择的爱好为:{checkVal.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}</p>
                <hr/>

                <select defaultValue={selectVal} onChange={this.handleSelectChange.bind(this)}>
                    <option value="请选择">请选择</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                </select>
                <p>您选择的时间为：{selectVal}</p>
            </div>
           
        )
    }
    handleSelectChange(e){
        let val = e.target.value;
       this.setState({
           selectVal:val
       })
    }
    handleRadio(e){
        let val = e.target.value;
        this.setState({
            radioVal:val
        })
    }
    handleCheckChange(e){
        let val = e.target.value;
        let arr = this.state.checkVal;
        let bStop = arr.includes(val);

        if(bStop){
            let index = arr.indexOf(val);
            arr.splice(index,1);
        }else{
            arr.push(val);
        }
        
        this.setState({
            checkVal:arr
        },()=>{
            console.log(this.state.checkVal)
        })
       
    }
    
    
}

export default App;
