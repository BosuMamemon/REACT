function Food({food}) {
    let {id, name, image, rating} = food;

    return (
        <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th><img src={image} style={{width: '100px', height: '100px'}}/></th>
            <th>{rating}</th>
        </tr>
    )
}

export default Food;