export function RestaurantDetail(props) {
    return (

        //DO THE STYLING BRO

        <div className="bg-[#] w-full">
            <h2 className="text-white">{props.restaurantName}</h2>
            <p className="text-white">{props.service}</p>
            <p className="text-white">{props.note}</p>
        </div>
    )
}