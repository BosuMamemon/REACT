import BoardItem from "./BoardItem.jsx";

function BoardList({thread}) {
    return (
        <div>
            <h3>Board List</h3>
            {
                thread.map(item => (
                    <BoardItem item={item}/>
                ))
            }
        </div>
    )
}

export default BoardList;