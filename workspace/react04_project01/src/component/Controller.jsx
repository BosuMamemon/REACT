function Controller({handleSetCount, handleSetRandom}) {
    return (
        <div>
            <button onClick={() => handleSetCount(-1)}>-1</button>
            <button onClick={() => handleSetCount(-10)}>-10</button>
            <button onClick={() => handleSetCount(-100)}>-100</button>
            <button onClick={() => handleSetCount(100)}>+100</button>
            <button onClick={() => handleSetCount(10)}>+10</button>
            <button onClick={() => handleSetCount(1)}>+1</button>
            <br/>
            <button onClick={handleSetRandom}>랜덤</button>
        </div>
    )
}

export default Controller;