import React from "react";
import {
  Container,
  AppShell,
  Burger,
  Group,
  Skeleton,
  Tabs,
  rem,
  Box,
  Image,
  Text,
  Grid,
} from "@mantine/core";
import { useDisclosure, useHover, useMediaQuery } from "@mantine/hooks";
import classes from "../Page.module.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import ball from "../assets/Ballanimation.gif";
import heroimage from "../assets/heroimage.jpeg";

const Hero = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className={classes.responsiveContainer} style={{ marginLeft: 60 }}>
      {/* <Box style={{ display: "flex", alignItems: "flex-start" }}>
      <Box style={{ marginRight: "20px", flex: 1 }}>
        <Text>t1</Text>
        <Text style={{ marginTop: "10px" }}>t2</Text>
      </Box>
      <Box style={{ flex: "5" }}>
        <Image src={heroimage} style={{ maxWidth: "100%", height: "auto" }} />
      </Box>
    </Box> */}
      <Grid style={{ marginTop: 40 }}>
        <Grid.Col span={4}>
          <p style={{ fontSize: "22px", color: "gray" }}>FRONT END DEVELOPER</p>
          <h1>Lynn</h1>
          <Box
            w="390px"
            mt="-180px"
            p="10px"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            {" "}
            <Image src={ball}></Image>
          </Box>
          <Text style={{ marginTop: "100px", color: "lightgrey" }}>
            I'm a Front End Developer & Designer and <br /> A CAT SERVANT
          </Text>
        </Grid.Col>
        <Grid.Col span={5} offset={3}>
          <Image
            style={{
              marginLeft: "30px",
            }}
            w={{ sm: 400, lg: 700 }}
            radius="md"
            h="auto"
            src={heroimage}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Hero;
