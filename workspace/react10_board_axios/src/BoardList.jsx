import BoardItem from "./BoardItem.jsx";

export default function BoardList({boards, removeBoard}) {
    return (
        <div>
            <h3>BoardList</h3>
            {
                boards.map(board => (
                    <div key={board.num}>
                        <BoardItem  {...board}
                                    removeBoard={removeBoard}/>
                      {/*  <BoardItem  board={board}
                                    removeBoard={removeBoard}/>*/}

                        {/*{board.num} // {board.title} /// {board.content}*/}
                        {/*<button onClick={() => removeBoard(board.num)}> 삭제</button>*/}
                    </div>
                ))
            }
        </div>
    )
} ;