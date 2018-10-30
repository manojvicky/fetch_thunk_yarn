import React, { Component } from 'react';
import FetchThunk from "./fetch_thunk/FetchThunk.Container";
class App extends Component{
   render(){
      return(
         <div>
             <FetchThunk />
         </div>
      );
   }
}
export default App;