function PhoneItem({info, handleRemove}) {
    return (
        <div>
            <h6>id: {info.id}</h6>
            <h6>name: {info.name}</h6>
            <h6>phone: {info.phone}</h6>
            <button onClick={()=>handleRemove(info.id)}>삭제</button>
        </div>
    )
}

export default PhoneItem;