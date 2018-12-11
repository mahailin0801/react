/*
   $on $emit $off 


  $on(eventName,function(){})

  $on("abc",fn1)
  $on("abc",fn2)


  $emit(eventName,params)
  $emit("abc",1)



  $off(eventName,fn)

*/


const eventList = {
    
}

const $on = function(eventName,cb) { 
    //判断当前事件名称是否存在
    if(!eventList[eventName]){
        eventList[eventName] = []
    }
    eventList[eventName].push(cb)
}

 const $emit = function(eventName,params){
     //判断当前事件名称是否存在
     if(eventList[eventName]){
        eventList[eventName].map((cb)=>{
            cb(params);
        })
     }else{
         return;
     }
}

 const $off = function(eventName,params){
    if(eventList[eventName]){
        if(params){
            eventList[eventName] = eventList[eventName].filter((cb)=>{
                return params != cb;
            })
        }else{
            eventList[eventName] = [];
        }
    }
}

export default {
    $on,
    $emit,
    $off
}
