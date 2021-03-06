import React, { FC, ReactElement } from 'react'
import { ITodo } from '../typings'

interface IProps {
  todo: ITodo
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const TdItem: FC<IProps> = ({ todo, toggleTodo, removeTodo }): ReactElement => {
  const { id, content, completed } = todo
  return (
    <div className="w-full flex items-center mt-1">
      <input
        className="mr-1"
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span
        className="flex-grow"
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {content}
      </span>
      <button
        className="border-none bg-red-600 text-white rounded-lg shadow-md px-3 py-1 text-xs ml-8 "
        onClick={() => removeTodo(id)}
      >
        删除
      </button>
    </div>
  )
}

export default TdItem
