const Button = ({text, customStyle}) => {
    return (
        <button className={`text-base ${customStyle}`}>
            <span className="text-bold">{text}</span>
        </button>
    )
}

export default Button;


