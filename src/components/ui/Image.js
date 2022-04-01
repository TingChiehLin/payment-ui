const Image = ({alt, imagePath, customStyle}) => {
    return (
        <img alt={alt} src={imagePath} className={customStyle}/>
    )
}

export default Image;
