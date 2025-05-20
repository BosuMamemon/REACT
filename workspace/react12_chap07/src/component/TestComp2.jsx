import {useReducer} from "react";

// state = 현재 state 값 저장, action = dispatch를 호출하면서 인수로 전달된 action 객체 저장
function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + action.data;
        case 'DECREASE':
            return state - action.data;
        case 'RESET':
            return 0;
        default:
            return state;
    }

}

function TestComp2() {
    // state변수 상태변화촉발함수        상태변화함수    초기값
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h3>TestComp1</h3>
            <div>
                count : {count}
            </div>

            <div>
                <button onClick={()=> dispatch({type: "INCREASE", data: 1})}> + </button>
                <button onClick={()=> dispatch({type: "DECREASE", data: 1})}> - </button>
                <button onClick={()=> dispatch({type: "RESET"})}>초기화(0)</button>
            </div>
        </div>
    )
}

export default TestComp2;