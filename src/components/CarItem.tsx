import React from "react";
import { Card, CardContent, Text, Spacer, useTheme, Link, Flex } from "vcc-ui";
import Image from "next/image";
import Car from "../types/car";

const CarItem = ({ id, bodyType, imageUrl, modelName, modelType }: Car) => {
  const { color } = useTheme();

  return (
    <Card
      style={{
        width: "fit-content",
        borderRadius: "0px",
        boxShadow: "none",
        marginBottom: "2rem",
      }}
    >
      <CardContent style={{ padding: "1rem" }}>
        <Flex style={{ textAlign: "left" }}>
          <Text
            style={{
              fontSize: ".85rem",
              fontWeight: 500,
              color: color.foreground.secondary,
              textTransform: "uppercase",
            }}
            subStyle="standard"
          >
            {bodyType}
          </Text>
          <Spacer size={1} />
          <Flex
            extend={{
              fromL: {
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            <Text style={{ fontSize: "1.15rem" }} subStyle="emphasis">
              {modelName}
            </Text>
            <Spacer size={1} />
            <Text style={{ color: color.foreground.secondary }}>
              {modelType}
            </Text>
          </Flex>
        </Flex>
        <Spacer size={2} />
        <Image src={imageUrl} alt="Volvo" width={280} height={210} />
        <Spacer size={2} />
        <Flex
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Link href={`/learn/${id}`} arrow="right">
            <span style={{ marginRight: ".25rem" }}>learn</span>
          </Link>
          <Spacer size={4} />
          <Link href={`/shop/${id}`} arrow="right">
            <span style={{ marginRight: ".25rem" }}>shop</span>
          </Link>
        </Flex>
      </CardContent>
    </Card>
  );
};

export default CarItem;
