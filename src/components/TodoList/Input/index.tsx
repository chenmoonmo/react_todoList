// useRef 获取dom
import React, { FC, ReactElement, useRef } from 'react'
import { ITodo } from '../typings'

// interface 接口
interface Iprops {
  addTodo: (todo: ITodo) => void
  todoList: ITodo[]
}

// 变量:FC 函数类型 参数:Iprops接口类型 返回值:ReactElement JSX类型
const TdInput: FC<Iprops> = ({ addTodo, todoList }): ReactElement => {
  // useRef固定写法 元素使用 ref={inputRef} 绑定
  const inputRef = useRef<HTMLInputElement>(null)
  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim()
    if (val.length) {
      const isExist = todoList.find((todo: ITodo) => todo.content == val)
      if (isExist) {
        alert('已存在该项')
        return
      }
      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false,
      })

      inputRef.current!.value = ''
    }
  }

  return (
    <div className="todo_input">
      <input type="text" placeholder="请输入代办项" ref={inputRef} />
      <button onClick={addItem}>增加</button>
    </div>
  )
}

export default TdInput
