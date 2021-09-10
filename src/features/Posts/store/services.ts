import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
    getPostsFailure,
    getPostsStart,
    getPostsSuccess,
    searchPostFailure,
    searchPostStart,
    searchPostSuccess,
} from "./actions";
import { toast } from "react-toastify";
import { useGetPostsApi, useSearchPostsApi } from "../api";
import { SearchQuery } from "../../../constants/interfaces/Filters";
import { handleError } from "../../../helpers/handleError";

export const useGetPostsService = () => {
    const getPostsApi = useGetPostsApi();
    const dispatch = useDispatch();
    return useCallback((): Promise<void> => {
        dispatch(getPostsStart());
        return getPostsApi()
            .then((response: any) => {
                dispatch(getPostsSuccess(response.data));
            })
            .catch((error: any) => {
                let errorMessage = handleError(error);
                dispatch(getPostsFailure(errorMessage));
                toast.error(errorMessage);
            });
    }, [dispatch, getPostsApi]);
};

export const useSearchPostsService = () => {
    const searchPostApi = useSearchPostsApi();
    const dispatch = useDispatch();
    return useCallback(
        (query: SearchQuery): Promise<void> => {
            dispatch(searchPostStart());
            return searchPostApi(query)
                .then((response: any) => {
                    dispatch(searchPostSuccess(response.data));
                })
                .catch((error: any) => {
                    let errorMessage = handleError(error);
                    dispatch(searchPostFailure(errorMessage));
                    toast.error(errorMessage);
                });
        },
        [dispatch, searchPostApi]
    );
};
