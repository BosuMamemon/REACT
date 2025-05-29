import {create} from "zustand/react";

const datas = [
    {id: 0, name: "홍길동", phone: "010-1111-1111"},
    {id: 1, name: "성춘향", phone: "010-2222-2222"}
]

const useDataStore = create(setState => (
        {
            datas: datas,
            action: {
                createData: data => setState(state => (
                    {datas: [...state.datas, {id: datas.length++, ...data}]}
                )),
                removeData: targetId => setState(state => (
                    {datas: state.datas.filter(it => String(it.id) !== String(targetId))}
                )),
                updateData: data => setState(state => (
                    {datas: state.datas.map(it => String(it.id) === String(data.id) ? {...it, name: data.name, phone: data.phone} : it)}
                ))
            }
        }
    )
)

export default useDataStore;