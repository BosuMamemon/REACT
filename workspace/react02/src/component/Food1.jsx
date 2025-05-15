function Food1({id, name, image, rating}) {
    return (
        <div>
            {id} <br/>
            {name} <br/>
            <img src={image}/> <br/>
            {rating} <br/> <br/>
        </div>
    )
}

export default Food1;