import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useUsersActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
// @ts-ignore
import s from './Users.module.css'

const UsersList: FC = () => {
    const {users, error, isLoading} = useTypedSelector(state => state.userReducer)
    const {getUsers} = useUsersActions()
    const navigate = useNavigate()

    useEffect(() => {
        getUsers()
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const usersElements = users.map(u =>
        <div
            className={s.item}
            onClick={() => navigate(`/users/${u.id}`)}
            key={u.id}>
            <div className={s.name}>{u.name}</div>
            <div className={s.username}>@{u.username}</div>
            <div className={s.email}>email: <i>{u.email}</i></div>
            <div className={s.city}>city: {u.address.city}</div>
            <div className={s.street}>street: {u.address.street}</div>
        </div>)

    return (
        <div className={s.container}>
            <div className={s.title}>Users</div>
            <div className={s.users_container}>{usersElements}</div>
        </div>
    );
};

export default UsersList;