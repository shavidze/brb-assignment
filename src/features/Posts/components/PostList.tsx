import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../../../components/Loader";
import { SearchQuery } from "../../../constants/interfaces/Filters";
import { Post } from "../../../constants/interfaces/Post";
import { useSearchThrottled } from "../../../hooks/useSearch";
import { RootState } from "../../../store/store";
import { useSearchPostsService } from "../store/services";
import PostItem from "./PostItem";

const PostListContainer = styled.ul`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid chartreuse;
`;

type Props = {
    posts: Post[];
};

const PostList: FC<Props> = ({ posts }) => {
    const { searchLoader } = useSelector((state: RootState) => state.post);
    const searchPosts = useSearchPostsService();
    const searchPostsThrottled = useSearchThrottled(searchPosts);
    const handleSearch = (inputValue: string) => {
        searchPostsThrottled({ searchTerm: inputValue } as SearchQuery);
    };

    return (
        <PostListContainer>
            <h1 className="m-4">Posts</h1>
            <input
                type="text"
                className="form-control w-50 m-4"
                onChange={(e) => handleSearch(e.target.value)}
                // value={initialQuery.searchTerm}
                placeholder="Enter name"
            />

            {posts.length > 0 && !searchLoader
                ? posts.map((post, key) => <PostItem post={post} key={key} />)
                : ""}
            {searchLoader && <Loader position="inherit" />}
            {!searchLoader && !posts.length && (
                <h2 className="text-center p-4 display-1">No Post Found</h2>
            )}
        </PostListContainer>
    );
};
export default PostList;
