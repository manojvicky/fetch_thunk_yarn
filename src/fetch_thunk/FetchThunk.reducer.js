
const initalstate = {
    isLoading:false,
};
    
    export default function reducer(state=initalstate, action){
      switch (action.type) {
        case 'REQUEST':
          return (Object.assign({}, state, {isLoading: action.isLoading}))
           
        case 'DATA':
          return (Object.assign({}, state, {data: action.data}))
    
        default:
          return state
      }
    }
    
    export {initalstate};
    