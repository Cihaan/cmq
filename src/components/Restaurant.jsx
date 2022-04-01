import { ListRestaurants } from "./ListRestaurants";
import { RestaurantDetail } from "./RestaurantDetail";

export function Restaurant() {
  const restaurant = [
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-[#0F172A] p-5">
        <div className="">
          <h2 className="text-2xl text-center text-[#37B9F3] font-['Roboto']">
            Restaurant list
          </h2>
          <ListRestaurants restaurant={restaurant} />
        </div>
        <button className="w-full h-10 text-[#37B9F3] text-xl font-['Roboto'] rounded border-2">
          Ca mange quoi
        </button>
      </div>
    </div>
  );
}
