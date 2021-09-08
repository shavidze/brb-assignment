import { FC } from "react";
import styled from "styled-components";
import { Post } from "../../../constants/interfaces/Post";

const PostItemContainer = styled.div`
    margin-bottom: 20px;
    cursor: pointer;

    .card-username {
        color: #fff;
        background-color: #0a58ca;
        border-color: #0a53be;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        text-align: center;
    }
`;

type Props = {
    post: Post;
};
const PostItem: FC<Props> = ({ post }) => {
    return (
        <PostItemContainer className="card" style={{ width: "18rem" }}>
            <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
                className="card-img-top"
                alt="POST IMG"
            />
            <div className="card-body">
                <h5 className="card-title">Title : {post.title}</h5>
                <p className="card-text">Description : {post.description}</p>
                <p className="card-username">{post.username}</p>
            </div>
        </PostItemContainer>
    );
};

export default PostItem;
