import { apiSlice } from './apiSlice';
import { TodoType } from '../types';

export const apiTodosSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        getTodos: build.query<TodoType[], void>({
            query: () => '/todos',
            providesTags: ['Todos'],
            transformResponse: (res: TodoType[]) =>
                res.sort((a, b) => b.createdAt!.localeCompare(a.createdAt!)),
        }),
        addTodo: build.mutation<void, TodoType>({
            query: todo => ({
                url: '/todos',
                method: 'POST',
                body: { ...todo, createdAt: new Date().toISOString() },
            }),
            invalidatesTags: ['Todos'],
        }),
        updateTodo: build.mutation<void, TodoType>({
            query: todo => ({
                url: `/todos/${todo.id}`,
                method: 'PATCH',
                body: todo,
            }),
            invalidatesTags: ['Todos'],
        }),
        deleteTodo: build.mutation<void, string>({
            query: id => ({
                url: `/todos/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Todos'],
        }),
    }),
});

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = apiTodosSlice;
