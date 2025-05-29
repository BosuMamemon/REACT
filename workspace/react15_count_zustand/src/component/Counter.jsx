import useCountStore from "../store/useCountStore.js";
import CountPage from "./CountPage.jsx";
import {useState} from "react";

const Counter = () => {
    let [minus, setMinus] = useState(false);
    let [stateCount, setStateCount] = useState(0);
    let changeCount = useCountStore(state => state.changeCount);
    let resetCount = useCountStore(state => state.resetCount);
    let numCount = useCountStore(state => state.numCount);
    let button = () => {
        if(!minus) return <button type={'button'} className={'btn btn-info ms-2'} onClick={()=>changeCount(stateCount)}>ADD NUMBER</button>
        else return <button type={'button'} className={'btn btn-info ms-2'} onClick={()=>changeCount(0-stateCount)}>SUBSTRACT NUMBER</button>
    };

    let onChangeCount = (e) => {
        isNaN(e.target.value) ? setStateCount(0) : setStateCount(Number(e.target.value));
    }

    return (
        <div className={'border border-2 border-primary-subtle rounded m-5 p-5'}>
            <input type="checkbox" id={'checkbox'} value={minus} onChange={()=>setMinus(!minus)}/>
            <label htmlFor={'checkbox'}>빼기</label>
            <br/>
            <button type={'button'} className={'btn btn-primary'} onClick={()=>changeCount(1)}>+</button>
            <button type={'button'} className={'btn btn-primary ms-2'} onClick={()=>changeCount(-1)}>-</button>
            <button type={'button'} className={'btn btn-danger ms-2'} onClick={resetCount}>RESET</button>
            <br/>
            <button type={'button'} className={'btn btn-dark ms-2'} onClick={() => numCount(stateCount)}>ENTER</button>
            {button()}
            <div className={'my-3'}>
                <label htmlFor={'num'} className={'form-label'}>숫자 입력</label>
                <input type="text" id={'num'} className={'form-control'}
                       value={stateCount} onChange={onChangeCount}/>
            </div>
            <CountPage/>
        </div>
    )
}

export default Counter;