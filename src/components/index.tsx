import React, { useCallback, useEffect, useState } from 'react'
import { ITodo } from './typings'

import TdInput from './Input'
import TdList from './List'

const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([])

  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  const addTodo = useCallback((todo: ITodo) => {
    setTodoList((todoList) => [...todoList, todo])
  }, [])
  return (
    <div className="todo_list">
      <TdInput addTodo={addTodo} todoList={[]} />
      <TdList />
    </div>
  )
}

export default TodoList
