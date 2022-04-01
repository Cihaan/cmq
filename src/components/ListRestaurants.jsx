import { RestaurantDetail } from "./RestaurantDetail";

export function ListRestaurants(props) {
  return props.restaurant.map((restaurant, index) => {
    return (
      <RestaurantDetail
        key={index}
        restaurantName={restaurant.restaurantName}
        note={restaurant.note}
        link={restaurant.link}
        service={restaurant.service}
      />
    );
  });
}
