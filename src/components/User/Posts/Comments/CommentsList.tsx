import React, {useEffect} from 'react';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useCommentsActions} from "../../../../hooks/useActions";
// @ts-ignore
import s from './Comments.module.css'

interface CommentProps {
    postId: number | undefined
}

const CommentsList: React.FC<CommentProps> = ({postId}) => {
    const {comments, error, isLoading} = useTypedSelector(state => state.commentReducer)
    const {getComments} = useCommentsActions()

    useEffect(() => {
        getComments(Number(postId))
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const commentsElements = comments.map(c => <div className={s.item} key={c.id}>
        <div><b>{c.name}</b></div>
        <div><i>{c.email}</i></div>
        <div>{c.body}</div>
    </div>)

    return (
        <div className={s.container}>
            <div className={s.title}>Comments</div>
            <div className={s.comments_container}>
                {commentsElements}
            </div>
        </div>
    );
};

export default CommentsList;