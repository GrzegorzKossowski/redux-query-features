import React from 'react';
import TodoForm from './TodoForm';
import {
    useDeleteTodoMutation,
    useGetTodosQuery,
    useUpdateTodoMutation,
} from '../api/apiTodosSlice';

const TodoList = () => {
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTodosQuery();
    const [deleteTodo] = useDeleteTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();

    if (isLoading) return <>Loading...</>;
    if (isError) return <>Error...</>;

    let content = todos?.map(todo => {
        return (
            <article key={todo.id} className='flex space-x-3 mb-4 items-center'>
                <div className='space-x-3'>
                    <input
                        type='checkbox'
                        name=''
                        id={todo.id}
                        defaultChecked={todo.completed}
                        onChange={() =>
                            updateTodo({ ...todo, completed: !todo.completed })
                        }
                    />
                    <label htmlFor={todo.id}>{todo.title}</label>
                </div>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className='border p-1'
                >
                    Delete
                </button>
                <div>{todo.createdAt}</div>
            </article>
        );
    });

    return (
        <div>
            {todos?.length}
            <br />
            {content}
        </div>
    );
};

export default TodoList;
