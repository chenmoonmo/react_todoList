import React, { FC, ReactElement } from 'react'
import { ITodo } from '../typings'
import TdItem from './item'

interface IProps {
  todoList: ITodo[]
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TdList: FC<IProps> = ({
  todoList,
  removeTodo,
  toggleTodo,
}): ReactElement => {
  return (
    <div className="todo_List">
      {todoList &&
        todoList.map((todo: ITodo) => {
          return (
            <TdItem
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          )
        })}
    </div>
  )
}

export default TdList
