import { Reducer } from "redux";
import { Post } from "../../../constants/interfaces/Post";
import { Actions, PostActions } from "./actions";

export interface PostState {
    posts: Post[];
    loading: boolean;
    searchLoader: boolean;
    error: string;
}
const initialState: PostState = {
    posts: [],
    loading: true,
    searchLoader: false,
    error: "",
};

const postsReducer: Reducer<PostState, PostActions> = (
    state = initialState,
    action: PostActions
): PostState => {
    switch (action.type) {
        case Actions.GET_POSTS_START:
            return {
                ...state,
                loading: true,
            };
        case Actions.GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case Actions.GET_POSTS_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload,
            };
        case Actions.SEARCH_POST_START:
            return {
                ...state,
                searchLoader: true,
            };
        case Actions.SEARCH_POST_SUCCESS:
            return {
                ...state,
                searchLoader: false,
                posts: action.payload,
            };
        case Actions.SEARCH_POST_FAILURE:
            return {
                ...state,
                searchLoader: true,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default postsReducer;
