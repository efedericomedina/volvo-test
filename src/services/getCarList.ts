import Car from "../types/car";

export default async function getCarList(): Promise<Array<Car> | undefined> {
  try {
    const result = await fetch("/api/cars.json");
    const data = await result.json();

    return data;
  } catch (error) {
    console.log("something went wrong");
    return undefined;
  }
}
