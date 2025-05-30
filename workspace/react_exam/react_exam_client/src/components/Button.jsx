import "../css/Button.css";


const Button = ({type, text, onClick}) => {
    let btnType = ["positive", "negative"].includes(type) ? type : "default";
    return (
        <button className={["Button", `Button_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
