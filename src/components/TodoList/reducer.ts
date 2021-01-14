/// reducer 文件 用来定义reduce 函数
import { IAction, IState, ITodo } from './typings'

import { ACTION_TYPE } from './typings'

function todoReducer(state: IState, action: IAction): IState {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo],
      }
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          return todo.id !== payload
        }),
      }
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          return todo.id === payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : { ...todo }
        }),
      }
    case ACTION_TYPE.INIT_TODO:
      return {
        ...state,
        todoList: payload as ITodo[],
      }
    default:
      return state
  }
}

export { todoReducer }
