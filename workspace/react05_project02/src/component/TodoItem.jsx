import "../css/TodoItem.css";

function TodoItem({isDone, id, content, createdDate, onDelete, onUpdate}) {
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" value={isDone} onChange={()=>onUpdate(id)}/>
            </div>
            <div>{id}</div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={()=>onDelete(id)}>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem;