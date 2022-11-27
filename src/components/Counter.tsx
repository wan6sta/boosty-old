import {useState} from 'react';
import cls from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)


  return <div className={cls.counter}>
    <button onClick={() => setCount(prev => prev + 1)}>+</button>
    {count}
  </div>
}