function PhoneItem({id, name, tel, address, deletePhone}){
    return(
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div> tel : {tel}</div>
            <div> address : {address}</div>
            <button onClick={()=>deletePhone(id)}>삭제</button>
            <hr/>
        </div>
    )
}

export default PhoneItem;