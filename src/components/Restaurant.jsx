import { ListRestaurants } from "./ListRestaurants";
import { RestaurantDetail } from "./RestaurantDetail";
import NavBar from "./NavBar";

export function Restaurant() {
  const restaurant = [
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
    {
      restaurantName: "Le Delice",
      note: 2.5,
      service: "Tacos, Burger, Pizza",
      link: "www.google.com"
    },
  ];

  return (
    <div className="mb-[15px]">
      <div className="min-h-screen bg-[#0F172A] p-5">
        <div className="">
          <h2 className="text-2xl text-center text-[#37B9F3] font-['Roboto']">
            Restaurant list
          </h2>
          <ListRestaurants restaurant={restaurant} />
        </div>
      </div>
      <NavBar />
    </div>
  );
}
