function ImageItem({image}) {
    console.log(image)
    return (  
        <div>
            <img className="imageListImg" src={image.urls.small_s3} alt={image.alt_description} />
        </div>
    );
}

export default ImageItem;