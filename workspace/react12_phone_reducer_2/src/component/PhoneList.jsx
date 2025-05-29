import useDataStore from "../store/useDataStore.jsx";
import PhoneItem from "./PhoneItem.jsx";

const PhoneList = () => {
    let datas = useDataStore(state => state.datas);

    return (
        <div>
            <h2>Phone List</h2>
            <div>
                {
                    datas.map(data => (<PhoneItem data={data} key={data.id}/>))
                }
            </div>
        </div>
    )
}

export default PhoneList;