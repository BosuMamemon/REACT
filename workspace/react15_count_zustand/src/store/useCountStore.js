import {create} from "zustand/react";

const UseCountStore = create(setState => (
    {
        count: 0,
        changeCount: num => setState(state => ({count: state.count + Number(num) >= 0 ? state.count + Number(num) : state.count})),
        resetCount: () => setState({count: 0}),
        numCount: num => setState({count: num}),
    }
))

export default UseCountStore;