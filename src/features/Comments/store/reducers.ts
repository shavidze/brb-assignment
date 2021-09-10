import { Reducer } from "redux";
import { IComment } from "../../../constants/interfaces/Comment";
import { Actions, PostActions } from "./actions";

export interface CommentState {
    comments: IComment[];
    loading: boolean;
    error: string;
}
const initialState: CommentState = {
    comments: [],
    loading: false,
    error: "",
};

const postsReducer: Reducer<CommentState, PostActions> = (
    state = initialState,
    action: PostActions
): CommentState => {
    switch (action.type) {
        case Actions.GET_COMMENTS_START:
            return {
                ...state,
                loading: true,
            };
        case Actions.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload,
            };
        case Actions.GET_COMMENTS_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload,
            };
        case Actions.ADD_COMMENT_START:
            return {
                ...state,
                loading: true,
            };
        case Actions.ADD_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload,
            };
        case Actions.ADD_COMMENT_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default postsReducer;
