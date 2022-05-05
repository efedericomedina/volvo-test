import { useEffect, useState } from "react";
import getCarList from "../src/services/getCarList";

import { Flex, Spacer, Text, View } from "vcc-ui";

import Car from "../src/types/car";
import CarItemList from "../src/components/CarItemList";
import FilterBar from "../src/components/FilterBar";
import Loading from "../src/components/Loading";

const HomePage = () => {
  const [carList, setcarList] = useState<undefined | null | Array<Car>>(null);
  const [displayCarList, setDisplayCarList] = useState<
    undefined | null | Array<Car>
  >(null);
  const [bodyType, setBodyType] = useState<string>("All");

  useEffect(() => {
    const carsFetch = async () => {
      const _carList = await getCarList();

      setcarList(_carList);
    };

    carsFetch();
  }, []);

  useEffect(() => {
    if (bodyType !== "All" && !!carList) {
      setDisplayCarList(
        carList.filter((car: Car) => car.bodyType === bodyType)
      );
    } else {
      setDisplayCarList(carList);
    }
  }, [bodyType, carList]);

  if (carList === null) {
    return <Loading />;
  }

  if (carList === undefined) {
    return (
      <View>
        <Text>There was an error</Text>
      </View>
    );
  }

  const populateFilter = () => {
    const obj = carList.reduce((values, { bodyType }) => {
      if (values[bodyType] === undefined) {
        values[bodyType] = 0;
      }

      return values;
    }, {});

    console.log(Object.keys(obj));

    return ["All", ...Object.keys(obj)];
  };

  return (
    <View spacing={4}>
      <Flex
        style={{
          margin: "2rem auto",
          width: "15rem",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text subStyle="emphasis">Bodytype:</Text>
        <Spacer size={1} />
        <FilterBar
          list={populateFilter()}
          filter={bodyType}
          setFilter={setBodyType}
        />
      </Flex>
      {!!displayCarList && <CarItemList cars={displayCarList} />}
    </View>
  );
};

export default HomePage;
