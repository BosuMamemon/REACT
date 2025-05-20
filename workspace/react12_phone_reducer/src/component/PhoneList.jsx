import PhoneItem from "./PhoneItem.jsx";

function PhoneList({information, handleRemove, handleUpdate}) {
    return (
        <div>
            <h2>Phone List</h2>
            <div>
                {
                    information.map(info => (<PhoneItem info={info} key={info.id}
                                                        handleRemove={handleRemove}
                                                        handleUpdate={handleUpdate}/>))
                }
            </div>
        </div>
    )
}

export default PhoneList;