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
    <div className="w-60 mt-5">
      {todoList &&
        todoList.map((todo: ITodo) => {
          return (
            <TdItem
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              key={todo.id}
            />
          )
        })}
    </div>
  )
}

export default TdList
