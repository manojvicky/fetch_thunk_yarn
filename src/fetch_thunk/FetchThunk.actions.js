import constants from "./FetchThunk.Constants";

export function requestApi(){
    return function(dispatch){
        const url="https://jsonplaceholder.typicode.com/comments/1"
        dispatch({type:constants.REQUEST,isLoading:true, timeStamp:Date.now()});
        
        fetch(url)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                return Promise.reject("wrong URL");
            }
        })
        .then((data)=>{
            dispatch({type: constants.DATA, data});
            dispatch({type:constants.REQUEST,isLoading:false, timeStamp:Date.now()});

        })
        .catch((error)=>{
            console.log(`%c ${error}`,"color:red;font-size:20px;");
            dispatch({type: constants.ERROR, error});
            dispatch({type:constants.REQUEST,isLoading:false, timeStamp:Date.now()});
        })
    }
}