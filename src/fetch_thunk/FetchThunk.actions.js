import constants from "./FetchThunk.Constants";

export function requestApi(){
    return function(dispatch){
        const url="https://jsonplaceholder.typicode.com/comments/1"
        dispatch({type:constants.REQUEST,isLoading:true});

        fetch(url)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
        })
        .then((data)=>{
            dispatch({type: constants.DATA, data});
            dispatch({type:constants.REQUEST,isLoading:false});

        })
    }
}