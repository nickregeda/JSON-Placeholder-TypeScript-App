import React, {useEffect, FC} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {usePostsActions} from "../../../hooks/useActions";
import {Pagination} from "@mui/material";
import {useNavigate} from "react-router-dom";
// @ts-ignore
import s from './Posts.module.css'

interface PostListProps {
    userId: number | undefined
}

const PostsList: FC<PostListProps> = ({userId}) => {
    const {posts, error, isLoading, limit, page} = useTypedSelector(state => state.postReducer)
    const {getPosts, setPostsPage} = usePostsActions()
    const navigate = useNavigate()
    const totalCount = 10
    const postsCount = Math.ceil(totalCount / limit)

    useEffect(() => {
        userId && getPosts(userId, page, limit)
    }, [page])

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const postsElements = posts.map(p =>
        <div className={s.item}
             onClick={() => navigate(`/posts/${p.id}`)}
             key={p.id}>
            <div className={s.post_title}>{p.title}</div>
            <div className={s.post_body}>{p.body}</div>
        </div>)

    return (
        <div className={s.container}>
            <div className={s.title}>
                Posts
            </div>
            <div className={s.posts_container}>
                {postsElements}
            </div>

            <Pagination
                count={postsCount}
                page={page}
                onChange={(_, num) => setPostsPage(num)}
            />
        </div>
    );
};

export default PostsList;