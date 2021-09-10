import { FC } from "react";
import { Post } from "../../../constants/interfaces/Post";
import { Controller, useForm } from "react-hook-form";
import { IComment } from "../../../constants/interfaces/Comment";
import { useAddCommentService, useGetCommentsService } from "../store/services";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea/TextArea";

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
        reset,
        control,
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
        reset({ name: "", body: "" });
    };
    return (
        <form className="w-100 p-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group d-flex flex-column mb-2">
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            label="Name"
                            className="form-control"
                            {...field}
                        />
                    )}
                />
                {errors.name && <p className="error">Name is required</p>}
            </div>
            <div className="form-group">
                <Controller
                    name="body"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=""
                    render={({ field }) => (
                        <TextArea
                            label="Comment Body"
                            className="form-control"
                            {...field}
                        />
                    )}
                />
                {errors.body && (
                    <p className="error">Comment Body is required</p>
                )}
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
