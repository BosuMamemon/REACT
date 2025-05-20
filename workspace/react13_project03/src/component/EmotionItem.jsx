import '../css/EmotionItem.css'
import React from "react";

const EmotionItem = ({id, img, name, isSelected, onClick}) => {
    return (
        <div className={['EmotionItem', isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`].join(" ")}
             onClick={() => onClick(id)}>
            <img alt={`emotion${id}`} src={img}/>
            <span>{name}</span>
        </div>
    )
}

// 이 컴포넌트를 리렌더시키지 않고 메모라이즈하겠다는 뜻임(useCallback()이랑 비슷한 뜻임)
export default React.memo(EmotionItem)
