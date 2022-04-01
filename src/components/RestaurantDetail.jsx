export function RestaurantDetail(props) {
    return (
        <div className="bg-[#212D3F] my-4 w-full border-2 rounded">
            <h2 className="text-white text-xl text-center">{props.restaurantName}</h2>
            <p className="text-white text-sm text-center">{props.service}</p>
            <p className="text-[#7986BE] text-center">{props.note}</p>
            <button className="w-full"><a className="text-center text-[#37B9F3]" href={props.link}>Go to google page</a></button>
        </div>
    )
}