import { FC, useState } from "react";
import { IComment } from "../../../constants/interfaces/Comment";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { useReplyCommentService } from "../store/services";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

type Props = {
    comment: IComment;
    onReply: () => void;
};

const ReplyButton = styled.button`
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-size: 14px;
    padding: 4px 8px;
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    &::hover,
    &::focus,
    &::active {
        cursor: pointer;
        background-color: #ecf0f1;
    }
`;

const ReplyCommentForm: FC<Props> = ({ comment, onReply }) => {
    const [openReply, setOpenReply] = useState(false);
    const addReply = useReplyCommentService();
    const {
        reset,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data: any) => {
        const newCommentData: IComment = {
            ...comment,
            replies: [...comment.replies, data],
        };
        if (comment.id)
            addReply(comment.id, newCommentData).then(() =>
                setOpenReply(false)
            );
        reset({ name: "", body: "" });
        onReply();
    };
    return (
        <>
            {openReply ? (
                <form className="m-3 w-100" onSubmit={handleSubmit(onSubmit)}>
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
                        {errors.name && (
                            <p className="error">Name is required</p>
                        )}
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
                    <div className="form-group mt-4">
                        <ReplyButton
                            type="submit"
                            className="btn text-primary m-3 py-2 px-3"
                        >
                            Reply
                        </ReplyButton>
                        <button
                            type="button"
                            onClick={() => setOpenReply(false)}
                            className="btn text-danger py-2 px-3"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <ReplyButton
                    type="button"
                    className="py-2 px-3 m-3"
                    onClick={() => setOpenReply(true)}
                    style={{ cursor: "pointer", width: "100%" }}
                >
                    Reply
                </ReplyButton>
            )}
        </>
    );
};
export default ReplyCommentForm;
