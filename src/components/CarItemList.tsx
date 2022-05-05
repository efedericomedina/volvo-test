import Car from "../types/car";

import CarItem from "./CarItem";
import CustomCarousel from "./CustomCarousel";

type CarItemListProps = {
  cars: Array<Car>;
};

const CarItemList = ({ cars }: CarItemListProps) => (
  <CustomCarousel>
    {cars.map((car) => (
      <CarItem key={car.id} {...car} />
    ))}
  </CustomCarousel>
);

export default CarItemList;
