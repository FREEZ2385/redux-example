import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, setZero, subtract } from '../actions';

function Count() {
    const num = {0:'zero',
            1:'one',
            2:'two',
            3:'three',
            4:'four',
            5:'five',
            6:'six',
            7:'seven',
            8:'eight',
            9:'nine'
            };
  const dispatch = useDispatch();
  const value = useSelector(state => state.value);
  return (
    <div className="App">
      <div>
        <h1>{num[value]}</h1>
      </div>
        <button onClick={()=>dispatch(add())}>+</button>
        <button onClick={()=>dispatch(setZero())}>reset</button>
        <button onClick={()=>dispatch(subtract())}>-</button>
    </div>
  );
}

export default Count;