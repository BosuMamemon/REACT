import {create} from "zustand/react";

const useDiaryStore = create(setState => (
    {
        diaries: [],
        actions: {
            setDiaries: initData => setState({diaries: initData}),
            createDiary: diary => setState(state => ({diaries: [...state.diaries, diary]})),
            updateDiary: diary => setState(state => (
                {diaries: state.diaries.map(it => (String(it.id) === String(diary.id) ? diary : it))}
            )),
            deleteDiary: targetId => setState(state => (
                {diaries: state.diaries.filter(it => String(it.id) !== String(targetId))}
            ))
        }
    }
));

export default useDiaryStore;