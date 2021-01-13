import React, { FC, ReactElement } from 'react'
import TdItem from './item'

const TdList: FC = (): ReactElement => {
  return (
    <div className="todo_List">
      <TdItem />
    </div>
  )
}

export default TdList
