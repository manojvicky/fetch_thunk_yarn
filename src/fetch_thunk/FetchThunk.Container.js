import { connect } from 'react-redux'; 
import FetchThunk from './FetchThunk';
import * as FetchThunkActions from './FetchThunk.actions';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        isLoading: state.fetchThunk.isLoading,
        data: state.fetchThunk.data,
        error: state.fetchThunk.error
    }),
    (dispatch)=>({
         actions: bindActionCreators(FetchThunkActions, dispatch)
    })
)(FetchThunk);

