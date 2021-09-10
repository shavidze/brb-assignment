import styled from "styled-components";

import { RootState } from "../../../store/store";
import Loader from "../../../components/Loader";

import Comments from "../../Comments/pages/Comments";

import PostList from "../components/PostList";

import { useSelector } from "react-redux";
import { useGetPostsService } from "../store/services";
import { FC, useEffect, useState } from "react";
import { Post } from "../../../constants/interfaces/Post";
import { useIfChanged } from "../../../hooks/usePrevious";

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
    const [selectedPost, setSelectedPost] = useState({} as Post);
    const ifPostChanged = useIfChanged(posts);
    useEffect(() => {
        getPosts().then(() => setSelectedPost(posts[0]));
    }, [getPosts, posts.length]);

    if (loading) {
        return <Loader position="fixed" />;
    }

    const onPostChange = (post: Post) => {
        setSelectedPost(post);
    };

    return (
        <Container>
            <PostList posts={posts} onPostSelect={onPostChange} />
            <CommentsList>
                <h1 className="m-4">Comments</h1>
                <Comments currentPost={selectedPost} />
            </CommentsList>
        </Container>
    );
};

export default Posts;
