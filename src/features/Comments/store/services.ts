import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { handleError } from "../../../helpers/handleError";
import { toast } from "react-toastify";
import {
    useAddCommentApi,
    useAddReplyCommentApi,
    useGetCommentsApi,
} from "../api";
import {
    addCommentFailure,
    addCommentStart,
    addCommentSuccess,
    addReplyFailure,
    addReplyStart,
    addReplySuccess,
    getCommentsFailure,
    getCommentsStart,
    getCommentsSuccess,
} from "./actions";
import { IComment } from "../../../constants/interfaces/Comment";

export const useGetCommentsService = () => {
    const getCommentssApi = useGetCommentsApi();
    const dispatch = useDispatch();
    return useCallback(
        (postId: string): Promise<void> => {
            dispatch(getCommentsStart());
            return getCommentssApi(postId)
                .then((response: any) => {
                    dispatch(getCommentsSuccess(response.data));
                })
                .catch((error: any) => {
                    let errorMessage = handleError(error);
                    dispatch(getCommentsFailure(errorMessage));
                    toast.error(errorMessage);
                });
        },
        [dispatch, getCommentssApi]
    );
};

export const useAddCommentService = () => {
    const addCommentssApi = useAddCommentApi();
    const dispatch = useDispatch();
    return useCallback(
        (data: IComment): Promise<void> => {
            dispatch(addCommentStart());
            return addCommentssApi(data)
                .then((response: any) => {
                    dispatch(addCommentSuccess(response.data));
                    toast.success("Comment added successfully", {
                        autoClose: 2500,
                    });
                })
                .catch((error: any) => {
                    let errorMessage = handleError(error);
                    dispatch(addCommentFailure(errorMessage));
                    toast.error(errorMessage);
                });
        },
        [dispatch, addCommentssApi]
    );
};

export const useReplyCommentService = () => {
    const replyCommentssApi = useAddReplyCommentApi();
    const dispatch = useDispatch();
    return useCallback(
        (commentId: string, data: IComment): Promise<void> => {
            dispatch(addReplyStart());
            return replyCommentssApi(commentId, data)
                .then((response: any) => {
                    dispatch(addReplySuccess(response.data));
                    toast.success("Comment added successfully", {
                        autoClose: 2500,
                    });
                })
                .catch((error: any) => {
                    let errorMessage = handleError(error);
                    dispatch(addReplyFailure(errorMessage));
                    toast.error(errorMessage);
                });
        },
        [dispatch, replyCommentssApi]
    );
};
