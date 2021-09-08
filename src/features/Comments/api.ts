import { useCallback } from "react";
import { IComment } from "../../constants/interfaces/Comment";
import { Http } from "../../services/http";

export function useGetCommentsApi() {
    return useCallback((postId: string): Promise<any> => {
        return Http.get(`comments?postId=${postId}`);
    }, []);
}

export function useAddCommentApi() {
    return useCallback((data: IComment): Promise<void> => {
        return Http.post(`comments/`, data);
    }, []);
}

export function useAddReplyCommentApi() {
    return useCallback((commentId: string, data: any) => {
        return Http.put(`comments/${commentId}`, data);
    }, []);
}
