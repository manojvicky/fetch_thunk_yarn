import React, { Component } from 'react';
class FetchThunk extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.actions.requestApi();
    }
   render(){
      return(
         <div style={{"width":"100%","height":"100vh"}}>
            <h1>Yoo</h1>
            <button onClick={this.handleClick}>Click me</button>
            <div style={{"display":"flex"}}>
            {
                this.props.isLoading && 
                <div style={{"justifyContent":"center","alignItem":"center"}}>Loading.....................</div>
            }
            </div>
            <div>
                {
                    this.props.data && !this.props.isLoading && <pre>{JSON.stringify(this.props.data)}</pre>
                }
            </div>
         </div>
      );
   }
}
export default FetchThunk;