import useCountStore from "../store/useCountStore.js";

const CountPage = () => {
    let count = useCountStore(state => state.count);

    return (
        <div className={'border border-2 border-danger-subtle rounded m-5 p-5'}>
            <h4>COUNT = <strong>{count}</strong></h4>
        </div>
    )
}

export default CountPage;