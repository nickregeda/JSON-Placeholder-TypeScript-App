import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {usePostsActions} from "../../../hooks/useActions";
import {useNavigate, useParams} from "react-router-dom";
import CommentsList from "./Comments/CommentsList";
// @ts-ignore
import s from './Posts.module.css'
import MyButton from "../../UI/button/MyButton";

const PostPage: FC = () => {
    const navigate = useNavigate()
    const params = useParams()
    const {post, isLoading, error} = useTypedSelector(state => state.postReducer)
    const {getPost} = usePostsActions()

    useEffect(() => {
        getPost(Number(params.postId))
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={s.post_page_container}>
            <MyButton onClick={() => navigate(-1)}>Back</MyButton>
            <div className={s.post_page_title}>{post?.title}</div>
            <div className={s.post_page_body}>{post?.body}</div>
            <CommentsList postId={post?.id}/>
        </div>
    );
};

export default PostPage;