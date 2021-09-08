import { combineReducers } from "redux";
import postsReducer from "../features/Posts/store/reducer";
import commentReducer from "../features/Comments/store/reducer";
const rootReducer = combineReducers({
    post: postsReducer,
    comment: commentReducer,
});

export default rootReducer;
