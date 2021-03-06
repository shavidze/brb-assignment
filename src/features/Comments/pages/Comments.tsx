import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "../../../constants/interfaces/Post";
import { RootState } from "../../../store/store";
import CommentForm from "../components/CommentForm";
import ReplyCommentForm from "../components/ReplyCommentForm";
import Comment from "../components/Comment";
import { useGetCommentsService } from "../store/services";
import { useIfChanged, usePrevious } from "../../../hooks/usePrevious";
type Props = {
    currentPost: Post;
};
const Comments: FC<Props> = ({ currentPost }) => {
    const getComments = useGetCommentsService();
    const { comments } = useSelector((state: RootState) => state.comment);
    const [showReplies, setShowReplies] = useState(
        new Array(comments.length).fill(false)
    );
    const ifCommentsChanged = useIfChanged(comments);
    const ifShowRepliesChanged = useIfChanged(showReplies);
    useEffect(() => {
        if (currentPost && currentPost.id) {
            getComments(currentPost.id).then(() => {
                if (ifShowRepliesChanged)
                    setShowReplies(new Array(comments.length).fill(false));
            });
        }
    }, [getComments, currentPost, ifCommentsChanged]);

    const handleShowReplies = (value: boolean, key: number) => {
        let newState = [...showReplies];
        newState[key] = value;
        setShowReplies(newState);
    };
    const onReply = () => {
        getComments(currentPost.id);
    };

    return (
        <>
            {currentPost ? (
                <div className="col-md-6">
                    <CommentForm currentPost={currentPost} />
                    <div className="col-md-12">
                        {comments.length > 0 &&
                            comments.map((comment, index) => (
                                <div>
                                    <Comment
                                        comment={comment}
                                        type="parent"
                                        index={index}
                                        handleShowReplies={handleShowReplies}
                                        showReplies={showReplies}
                                        key={index}
                                    />
                                    {showReplies[index] &&
                                    comment.replies.length > 0 ? (
                                        <button
                                            className=" text-center mx-3 py-2 px-3 text-dark border m-4"
                                            style={{ width: "100%" }}
                                            onClick={() =>
                                                handleShowReplies(false, index)
                                            }
                                        >
                                            Hide Replies
                                        </button>
                                    ) : comment.replies.length === 0 ? (
                                        <button
                                            className=" text-center mx-3 py-2 px-3 text-dark border m-4"
                                            style={{ width: "100%" }}
                                        >
                                            No Replies
                                        </button>
                                    ) : (
                                        <button
                                            className=" text-center mx-3 py-2 px-3 text-dark border m-4"
                                            style={{ width: "100%" }}
                                            onClick={() =>
                                                handleShowReplies(true, index)
                                            }
                                        >
                                            Show Replies
                                        </button>
                                    )}
                                    <ReplyCommentForm
                                        onReply={onReply}
                                        comment={comment}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
};
export default Comments;
