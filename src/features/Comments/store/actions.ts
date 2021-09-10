import { Action } from "redux";
import { IComment } from "../../../constants/interfaces/Comment";

export enum Actions {
    GET_COMMENTS_START = "GET_COMMENTS_START",
    GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS",
    GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE",

    ADD_COMMENT_START = "ADD_COMMENT_START",
    ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
    ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE",

    ADD_REPLY_START = "ADD_REPLY_START",
    ADD_REPLY_SUCCESS = "ADD_REPLY_SUCCESS",
    ADD_REPLY_FAILURE = "ADD_REPLY_FAILURE",
}

export function getCommentsStart() {
    return {
        type: Actions.GET_COMMENTS_START as Actions.GET_COMMENTS_START,
    };
}

export function getCommentsSuccess(payload: IComment[]) {
    return {
        type: Actions.GET_COMMENTS_SUCCESS as Actions.GET_COMMENTS_SUCCESS,
        payload,
    };
}

export function getCommentsFailure(error: string) {
    return {
        type: Actions.GET_COMMENTS_FAILURE as Actions.GET_COMMENTS_FAILURE,
        payload: error,
    };
}

export function addCommentStart() {
    return {
        type: Actions.ADD_COMMENT_START as Actions.ADD_COMMENT_START,
    };
}

export function addCommentSuccess(payload: IComment[]) {
    return {
        type: Actions.ADD_COMMENT_SUCCESS as Actions.ADD_COMMENT_SUCCESS,
        payload,
    };
}

export function addCommentFailure(error: string) {
    return {
        type: Actions.ADD_COMMENT_FAILURE as Actions.ADD_COMMENT_FAILURE,
        payload: error,
    };
}

export function addReplyStart() {
    return {
        type: Actions.ADD_REPLY_START as Actions.ADD_REPLY_START,
    };
}

export function addReplySuccess(payload: IComment) {
    return {
        type: Actions.ADD_REPLY_SUCCESS as Actions.ADD_REPLY_SUCCESS,
        payload,
    };
}

export function addReplyFailure(error: string) {
    return {
        type: Actions.ADD_REPLY_FAILURE as Actions.ADD_REPLY_FAILURE,
        error,
    };
}

export type PostActions =
    | ReturnType<typeof getCommentsStart>
    | ReturnType<typeof getCommentsSuccess>
    | ReturnType<typeof getCommentsFailure>
    | ReturnType<typeof addCommentStart>
    | ReturnType<typeof addCommentSuccess>
    | ReturnType<typeof addCommentFailure>
    | ReturnType<typeof addReplyStart>
    | ReturnType<typeof addReplySuccess>
    | ReturnType<typeof addReplyFailure>;
