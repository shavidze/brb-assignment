import { FC } from "react";
import { Post } from "../../../constants/interfaces/Post";
import { useForm } from "react-hook-form";
import { IComment } from "../../../constants/interfaces/Comment";
import { useAddCommentService, useGetCommentsService } from "../store/services";

type Props = {
    currentPost: Post;
};
interface CommentFormInterface {
    body: string;
    name: string;
}
const CommentForm: FC<Props> = ({ currentPost }) => {
    const addComment = useAddCommentService();
    const getComments = useGetCommentsService();
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = ({ body, name }: CommentFormInterface) => {
        getComments(currentPost.id);
        const commentData: IComment = {
            id: "",
            body,
            name,
            postId: currentPost.id,
            replies: [],
        };
        addComment(commentData);
        reset();
    };
    return (
        <form className="w-100 p-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group d-flex flex-column mb-2">
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    {...register("name", { required: true })}
                />
                {errors.name && <p className="error">name is required</p>}
            </div>
            <div className="form-group">
                <textarea
                    className="form-control"
                    {...register("body", { required: true })}
                ></textarea>
                {errors.body && <p className="error">comment is required</p>}
            </div>
            <div className="form-group d-flex mb-2">
                <input
                    type="submit"
                    className="form-control btn btn-primary mt-2"
                    value="Add Comment"
                />
            </div>
        </form>
    );
};

export default CommentForm;
