import React, { Component } from 'react';
import FetchThunk from "./fetch_thunk/FetchThunk.Container";
import Header from "./header/Header";
import style from "./style.css";
class App extends Component{
   render(){
      return(
         <div className="Wrapper">
             <Header/>
             <FetchThunk />
         </div>
      );
   }
}
export default App;