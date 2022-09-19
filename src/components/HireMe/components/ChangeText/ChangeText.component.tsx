import React, { useEffect, useState } from 'react'
import { transformText } from '../../../../common/utils.common'

interface IChangeTextProps {
  texts: string[]
}

export const ChangeText: React.FC<IChangeTextProps> = ({ texts }) => {
  const [text, setText] = useState(texts[0] || '')

  useEffect(() => {
    let i = 1

    const timer = setInterval(() => {
      const startIdx = i - 1 >= 0 ? i - 1 : texts.length - 1
      const strArr = transformText(texts[startIdx], texts[i], 3)
      let last = 0
      strArr.forEach((line) => {
        const delay = 50 + Math.ceil(Math.random() * 100)
        setTimeout(() => setText(line.join('')), last + delay)
        last = last + delay
      })

      i = i + 1 < texts.length ? i + 1 : 0
    }, 2500 + Math.ceil(Math.random() * 2000))

    return () => {
      clearTimeout(timer)
    }
  }, [texts])

  return <span className="change-text">{text}</span>
}
