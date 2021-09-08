import { useCallback } from "react";
import { SearchQuery } from "../../constants/interfaces/Filters";
import { Post } from "../../constants/interfaces/Post";
import { Http } from "../../services/http";

export function useGetPostsApi() {
    return useCallback((): Promise<Post[]> => {
        return Http.get("posts");
    }, []);
}

export function useSearchPostsApi() {
    return useCallback((query: SearchQuery): Promise<any> => {
        const buildQuery =
            query.searchTerm.length > 0
                ? `username_like=${query.searchTerm}`
                : "";
        return Http.get(`posts?${buildQuery}`);
    }, []);
}
