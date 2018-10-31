
const initalstate = {
    isLoading:false,
    timeStamp: ""
};
    
    export default function reducer(state=initalstate, action){
      switch (action.type) {
        case 'REQUEST':
          return (Object.assign({}, state, {isLoading: action.isLoading}, {timeStamp: action.timeStamp}))
           
        case 'DATA':
          return (Object.assign({}, state, {data: action.data}))

        case 'ERROR':
          return (Object.assign({}, state, {error: action.error}, {timeStamp: action.timeStamp}))
    
        default:
          return state
      }
    }
    
    export {initalstate};
    