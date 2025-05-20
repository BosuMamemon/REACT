export default function BoardItem ({num,title,content, removeBoard}) {
    return (
        <div>
            <p>title : {title}</p>
            <p>
                content : {content}
                <button onClick={()=>removeBoard(num)}>삭제</button>
            </p>
            <hr/>
        </div>
    )
}

// export default function BoardItem ({board, removeBoard}) {
//     return (
//         <div>
//             <p>title : {board.title}</p>
//             <p>
//                 content : {board.content}
//                 <button onClick={()=>removeBoard(board.num)}>삭제</button>
//             </p>
//             <hr/>
//         </div>
//     )
// }