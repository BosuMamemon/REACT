function Viewer({count}) {
    let evenOrOdd = count % 2 === 0 ? "짝수" : "홀수";
    if(count === 0) evenOrOdd = "시작";

    return (
        <div>
            <div>
                현재 카운트:
                <h1>{count}</h1>
            </div>
            <div>
                홀/짝:
                <h1>{evenOrOdd}</h1>
            </div>
        </div>
    )
}

export default Viewer;