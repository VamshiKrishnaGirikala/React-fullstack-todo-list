const url="http://localhost:8080/api/todos/";

export async function getTodos(){
    return fetch(url)
    .then(resp=>
      {
        if(!resp.ok)
        {
          if(resp.status>=400&&resp.status<500){
            return resp.json().then(data=>{
              let err={errorMessage:data.message};
              throw err;
            })
          } else{
            let err={errorMessage:"Please try again alter, srver is not responding!!"}
            throw err;
          }
        }
        return resp.json();
      })

}
export async function createTodo(val){
return fetch(url,{
  method:"post",
  headers:new Headers({
      "Content-Type":"application/json",
  }),
  body:JSON.stringify({name:val})
})
  .then(resp=>
    {
      if(!resp.ok)
      {
        if(resp.status>=400&&resp.status<500){
          return resp.json().then(data=>{
            let err={errorMessage:data.message};
            throw err;
          })
        } else{
          let err={errorMessage:"Please try again alter, srver is not responding!!"}
          throw err;
        }
      }
      return resp.json();
    })
}

export async function removeTodo(id){
  const deleteUrl=url+id;
  return fetch(deleteUrl,{
      method:"delete",
      
  })
      .then(resp=>
        {
          if(!resp.ok)
          {
            if(resp.status>=400&&resp.status<500){
              return resp.json().then(data=>{
                let err={errorMessage:data.message};
                throw err;
              })
            } else{
              let err={errorMessage:"Please try again alter, srver is not responding!!"}
              throw err;
            }
          }
          // return resp.json();
        })
}
 export async function updateTodo(todo){
  const updateUrl=url+todo._id;
    return fetch(updateUrl,{
        method:"put",
        headers:new Headers({
            "Content-Type":"application/json",
        }),
        body:JSON.stringify({completed:!todo.completed})
        
    })
        .then(resp=>
          {
            if(!resp.ok)
            {
              if(resp.status>=400&&resp.status<500){
                return resp.json().then(data=>{
                  let err={errorMessage:data.message};
                  throw err;
                })
              } else{
                let err={errorMessage:"Please try again alter, srver is not responding!!"}
                throw err;
              }
            }
            return resp.json();
          })
 }
