const Text = ({description, customStyle}) => {
    return (
        <p className={`text-base ${customStyle}`}>
            {description}
        </p>
    )
}

export default Text;

export const TextLight = ({description, customStyle}) => {
    return (
        <p className={`text-light  ${customStyle}`}>
            {description}
        </p>
    )
}

