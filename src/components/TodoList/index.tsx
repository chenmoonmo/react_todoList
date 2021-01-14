import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useReducer,
} from 'react'
import { ACTION_TYPE, IState, ITodo } from './typings'
import { todoReducer } from './reducer'
import TdInput from './Input'
import TdList from './List'

// const initialState: IState = {
//   todoList: [],
// }

function init(initTodoList: ITodo[]): IState {
  return {
    todoList: initTodoList,
  }
}

const TodoList: FC = (): ReactElement => {
  // const [todoList, setTodoList] = useState<ITodo[]>([])
  // useReducer 参数将作为 init 参数函数的参数  init函数的返回值为state的初始化结果
  // init函数在useReducer 调用时 执行
  const [state, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    const List = JSON.parse(localStorage.getItem('todolist') as string) || []
    dispatch({ type: ACTION_TYPE.INIT_TODO, payload: List })
  }, [])

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(state.todoList))
  }, [state.todoList])

  const addTodo = useCallback((todo: ITodo) => {
    // setTodoList((todoList) => [...todoList, todo])
    dispatch({ type: ACTION_TYPE.ADD_TODO, payload: todo })
  }, [])

  const removeTodo = useCallback((id: number) => {
    dispatch({ type: ACTION_TYPE.REMOVE_TODO, payload: id })
  }, [])

  const toggleTodo = useCallback((id: number) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_TODO, payload: id })
  }, [])

  return (
    <div className="container flex flex-col mx-auto justify-items-center items-center mt-10">
      <TdInput addTodo={addTodo} todoList={state.todoList} />
      <TdList
        todoList={state.todoList}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  )
}

export default TodoList
