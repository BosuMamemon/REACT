import {create} from "zustand";

const useDiaryStore = create((set, get) => (
    {
        diaries: [],
        actions: {
            setDiaries: (initData) => {
                set({diaries: initData || []});
            },
            createDiary: diary => set(state => ({diaries: [...state.diaries, diary]})),
            updateDiary: diary => set(state => (
                {diaries: state.diaries.map(it => (String(it.id) === String(diary.id) ? diary : it))}
            )),
            deleteDiary: targetId => set(state => (
                {diaries: state.diaries.filter(it => String(it.id) !== String(targetId))}
            ))
        }
    }
));

export default useDiaryStore;