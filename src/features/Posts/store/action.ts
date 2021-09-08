export enum Actions {
    GET_POSTS_START = "GET_POSTS_START",
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    GET_POSTS_FAILURE = "GET_POSTS_FAILURE",

    SEARCH_POST_START = "SEARCH_POST_START",
    SEARCH_POST_SUCCESS = "SEARCH_POST_SUCCESS",
    SEARCH_POST_FAILURE = "SEARCH_POST_FAILURE",
}

export function getPostsStart() {
    return {
        type: Actions.GET_POSTS_START as Actions.GET_POSTS_START,
    };
}

export function getPostsSuccess(payload: any) {
    return {
        type: Actions.GET_POSTS_SUCCESS as Actions.GET_POSTS_SUCCESS,
        payload,
    };
}

export function getPostsFailure(error: string) {
    return {
        type: Actions.GET_POSTS_FAILURE as Actions.GET_POSTS_FAILURE,
        payload: error,
    };
}

export function searchPostStart() {
    return {
        type: Actions.SEARCH_POST_START as Actions.SEARCH_POST_START,
    };
}

export function searchPostSuccess(payload: any) {
    return {
        type: Actions.SEARCH_POST_SUCCESS as Actions.SEARCH_POST_SUCCESS,
        payload,
    };
}

export function searchPostFailure(error: string) {
    return {
        type: Actions.SEARCH_POST_FAILURE as Actions.SEARCH_POST_FAILURE,
        payload: error,
    };
}

export type PostActions =
    | ReturnType<typeof getPostsStart>
    | ReturnType<typeof getPostsSuccess>
    | ReturnType<typeof getPostsFailure>
    | ReturnType<typeof searchPostStart>
    | ReturnType<typeof searchPostSuccess>
    | ReturnType<typeof searchPostFailure>;
