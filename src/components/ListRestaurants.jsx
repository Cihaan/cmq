import { RestaurantDetail } from "./RestaurantDetail";

export function ListRestaurants(props) {
  return props.restaurant.map((restaurant, index) => {
    return (
      <RestaurantDetail
        key={index}
        restaurantName={restaurant.restaurantName}
        note={restaurant.note}
        service={restaurant.service}
      />
    );
  });
}
