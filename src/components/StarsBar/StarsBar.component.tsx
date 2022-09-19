import React from 'react'
import { key } from '../../common/utils.common'
import './StarsBar.component.scss'

interface IStarsBarProps {
  name: string
  value: number
  max?: number
}

const StarsBar: React.FC<IStarsBarProps> = ({ name, value = 0, max = 6 }) => {
  const array = new Array(max).fill(name)

  return (
    <div className="stars-bar">
      {array.map((v, i) => (
        <div key={key(v, i)} className={`star ${value >= i + 1 && 'on'}`} />
      ))}
    </div>
  )
}

export default StarsBar
