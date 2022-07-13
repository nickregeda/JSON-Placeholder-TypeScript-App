import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useTodosActions} from "../../../hooks/useActions";
import {Pagination} from "@mui/material";
// @ts-ignore
import task_completed from '../../../img/done-task.png'
// @ts-ignore
import s from './Todos.module.css'

interface TodoProps {
    userId: number | undefined
}

const TodoList: FC<TodoProps> = ({userId}) => {
    const {todos, isLoading, error, limit, page} = useTypedSelector(state => state.todoReducer)
    const {getTodos, setTodosPage} = useTodosActions()
    const totalCount = 20;
    const pagesCount = Math.ceil(totalCount / limit)
    useEffect(() => {
        getTodos(Number(userId), page, limit)
    }, [page])

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const todosElements = todos.map(td => <div className={s.item}
                                               key={td.id}>
        <div className={s.todo_title}>- {td.title}</div>
        <img className={s.completed_image} src={td.completed ? task_completed : 'none'} alt=""/>
    </div>)

    return (
        <div className={s.container}>
            <div className={s.todos_container}>
                {todosElements}
            </div>
            <Pagination
                page={page}
                count={pagesCount}
                onChange={(_, num) => {
                    setTodosPage(num);
                }}
            />
        </div>
    );
};

export default TodoList;