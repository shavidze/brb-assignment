import { combineReducers } from "redux";
import postsReducer from "../features/Posts/store/reducers";
import commentReducer from "../features/Comments/store/reducers";
const rootReducer = combineReducers({
    post: postsReducer,
    comment: commentReducer,
});

export default rootReducer;
