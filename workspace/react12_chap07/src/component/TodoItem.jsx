import "../css/TodoItem.css"

function TodoItem({item, onUpdate, onDelete}) {
    let checkOnChange = () => {
        onUpdate(item.id);
    }
    let deleteOnClick = () => {
        console.log("deleteOnClick: ");
        console.log(item);
        onDelete(item.id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" checked={item.isDone} onChange={checkOnChange}/>
            </div>
            <div className="title_col">{item.content}</div>
            <div className="date_col">{new Date(item.createdDate).toLocaleString()}</div>
            <div className="btn_col">
                <button onClick={deleteOnClick}>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem;