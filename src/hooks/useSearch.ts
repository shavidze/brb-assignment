import { useCallback } from "react";
import { throttle } from "underscore";
import { SearchQuery } from "../constants/interfaces/Filters";

const MIN_CHARACTERS = 2;

export const useSearchThrottled = (
    searchEntity: (searchParams: SearchQuery) => void,
    minChars: number = MIN_CHARACTERS
) => {
    return useCallback(
        throttle((searchParams?: SearchQuery) => {
            if (!searchParams) {
                return searchEntity(null as unknown as SearchQuery);
            }
            if (
                searchParams.searchTerm.length > minChars ||
                searchParams.searchTerm.length < 1
            ) {
                return searchEntity(searchParams);
            }
        }, 1000),
        [searchEntity]
    );
};
