export interface IComment {
    id: string | "";
    name: string;
    body: string;
    replies: IComment[];
    postId: string;
}

export interface ReplyComment {
    id?: string;
    name: string;
    body: string;
}
