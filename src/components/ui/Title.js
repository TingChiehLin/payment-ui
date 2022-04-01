const Title = ({description, customStyle}) => {
    return (
        <h1 className={`text-title ${customStyle}`}>
            {description}
        </h1>
    )
}

export default Title;

export const SubTitle = ({description, customStyle}) => {
    return (
        <h2 className={`text-subtitle ${customStyle}`}>
            {description}
        </h2>
    )
}
