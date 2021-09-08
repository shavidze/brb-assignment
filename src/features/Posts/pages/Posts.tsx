import styled from "styled-components";

import { RootState } from "../../../store/store";
import Loader from "../../../components/Loader";

import Comments from "../../Comments/pages/Comments";

import PostList from "../components/PostList";

import { useSelector } from "react-redux";
import { useGetPostsService } from "../store/services";
import { FC, useEffect } from "react";

const CommentsList = styled.ul`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
`;

const Posts: FC = () => {
    const { posts, loading } = useSelector((state: RootState) => state.post);
    const getPosts = useGetPostsService();

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    if (loading) {
        return <Loader position="fixed" />;
    }

    return (
        <Container>
            <PostList posts={posts} />
            <CommentsList>
                <h1 className="m-4">Comments</h1>
                <Comments currentPost={posts[0]} />
            </CommentsList>
        </Container>
    );
};

export default Posts;
