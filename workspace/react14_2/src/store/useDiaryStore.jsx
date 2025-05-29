import {create} from "zustand/react";

const mockData = [
    {
        id: "mock1",
        date: new Date().getTime() - 1,
        content: "mock1",
        emotionId: 1,
    },
    {
        id: "mock2",
        date: new Date().getTime() - 2,
        content: "mock2",
        emotionId: 2,
    },
    {
        id: "mock3",
        date: new Date().getTime() - 3,
        content: "mock3",
        emotionId: 3,
    },
];

const useDiaryStore = create(setState => (
    {
        diaries: mockData,
        actions: {
            initDiaries: () => setState({diaries: mockData}),
            createDiary: diary => setState(state => ({diaries: [...state.diaries, diary]})),
            updateDiary: diary => setState(state => (
                state.diaries.map(it => (String(it.id) === diary.id ? diary : it))
            )),
            deleteDiary: targetId => setState(state => (
                state.diaries.filter(it => String(it.id) !== String(targetId))
            ))
        }
    }
));

export default useDiaryStore;