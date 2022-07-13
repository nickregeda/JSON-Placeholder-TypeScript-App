import React, {useEffect, FC} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useUsersActions} from "../../hooks/useActions";
import PostsList from "./Posts/PostsList";
import TodoList from "./Todos/TodoList";
// @ts-ignore
import s from './Users.module.css'
import MyButton from "../UI/button/MyButton";
import AlbumsList from "./Albums/AlbumsList";

const UserPage: FC = () => {
    const navigate = useNavigate()
    const params = useParams()
    const {user, error, isLoading} = useTypedSelector(state => state.userReducer)
    const {getUser} = useUsersActions()

    useEffect(() => {
        getUser(Number(params.userId))
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={s.container}>
            <MyButton onClick={() => navigate(-1)}>Back</MyButton>
            <div className={s.user_info_container}>
                <div className={s.name}>{user?.name}</div>
                <div className={s.username}>@{user?.username}</div>
                <div>email: <i>{user?.email}</i></div>
                <div>city: {user?.address.city}</div>
                <div>street: {user?.address.street}</div>
            </div>
            <div>
                <PostsList userId={user?.id}/>
                <TodoList userId={user?.id}/>
                <AlbumsList userId={user?.id}/>
            </div>
        </div>
    );
};

export default UserPage;