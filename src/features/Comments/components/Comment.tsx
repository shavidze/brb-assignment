import { FC } from "react";
import { IComment } from "../../../constants/interfaces/Comment";

type Props = {
    comment: IComment;
    type: "parent" | "child";
    key: string;
    index: number;
    handleShowReplies: (value: boolean, key: number) => void;
    showReplies: boolean[];
};

const Comment: FC<Props> = ({
    comment,
    type,
    key,
    index,
    handleShowReplies,
    showReplies,
}) => {
    const repliesComments = (comment.replies || []).map((comment) => {
        return (
            <Comment
                key={comment.id}
                index={index}
                comment={comment}
                handleShowReplies={handleShowReplies}
                showReplies={showReplies}
                type="child"
            />
        );
    });

    if (type === "parent") {
        return (
            <>
                <div className="w-100 card m-2 p-4 border border-red ">
                    <div className="w-100 d-flex align-items-center">
                        <p className="m-0 text-capitalize text-white bg-dark pt-3 pb-3 p-4 rounded-circle text-center">
                            {comment.name[0]}
                        </p>
                        <p className="m-4">{comment.body}</p>
                    </div>
                </div>

                {repliesComments}
            </>
        );
    }
    return (
        <>
            {showReplies[index] && (
                <div
                    className={`form-group my-2 d-flex align-items-center justify-content-between profile p-2 m-5 border border-dark`}
                    key={index}
                >
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="col-md-4 rounded-circle py-3 text-center bg-dark text-white text-uppercase">
                            {comment.name.split(" ").length < 2
                                ? comment.name[0] + comment.name[1]
                                : comment.name.split(" ")[0][0] +
                                  comment.name.split(" ")[1][0]}
                        </div>
                        <div
                            className="text-center m-2"
                            style={{
                                width: "200px",
                            }}
                        >
                            <h5 className="card-title mb-0 text-capitalize">
                                {comment.name}
                            </h5>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Comment;
