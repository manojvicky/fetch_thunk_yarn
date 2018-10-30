import {combineReducers} from "redux";
import fetchThunk from "./fetch_thunk/FetchThunk.reducer";
const rootReducer = combineReducers({
    fetchThunk
});

export default rootReducer;