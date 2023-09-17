import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAddTodoMutation } from '../api/apiSlice';

const TodoForm = () => {
    const todoRef = useRef<HTMLInputElement>(null);

    const [addTodo] = useAddTodoMutation();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(todoRef?.current?.value);
        console.log(uuidv4());
        if (todoRef?.current?.value) {
            addTodo({
                userId: '3c098c70-13c8-4704-ba45-dc1d2cd778b3',
                id: uuidv4(),
                title: todoRef?.current?.value,
                completed: false
            });
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col space-y-4 max-w-md'
        >
            <label htmlFor='new-todo' className='font-bold text-2xl'>
                New todo
            </label>
            <div>
                <input
                    className='border rounded-md p-2 w-full'
                    ref={todoRef}
                    type='text'
                    id='new-todo'
                    maxLength={60}
                    placeholder='Enter new todo'
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
        </form>
    );
};

export default TodoForm;
