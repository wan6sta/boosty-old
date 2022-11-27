import {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)


  return <div className='counter'>
    <button onClick={() => setCount(prev => prev + 1)}>+</button>
    {count}
  </div>
}