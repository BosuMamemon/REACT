import '../css/EmotionItem.css';

const EmotionItem = ({id, img, name, isSelected, onClick}) => {
    return (
        <div className={['EmotionItem', isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`].join(" ")}
             onClick={() => onClick(id)}>
            <img alt={`emotion${id}`} src={img}/>
            <span>{name}</span>
        </div>
    )
}

export default EmotionItem;