import {create} from "zustand/react";

const mockTodo = [
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createdDate: new Date().getTime(),
    },
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    }
];

const useTodoStore = create(set => ({
    todos: mockTodo,
    addTodo: newTodo => set(state => (
        {
            todos: [newTodo, ...state.todos]
        }
    )),
    removeTodo: removeTodo => set(state => (
        {
            todos: state.todos.filter(it => it !== removeTodo)
        }
    )),
    updateTodo: updateId => set(state => (
        {
            todos: state.todos.map(it => String(it.id) === String(updateId) ? {...it, isDone: true} : it)
        }
    ))
}));

export default useTodoStore;