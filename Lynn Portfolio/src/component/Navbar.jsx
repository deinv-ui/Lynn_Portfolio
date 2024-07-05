import React from "react";
import { useState } from 'react';
import {
  Container,
  AppShell,
  Burger,
  Group,
  Skeleton,
  Tabs,
  rem,
  Box,
} from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import classes from "../Page.module.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

const Navbar = () => {
  // define "lord-icon" custom element with default properties
  defineElement(lottie.loadAnimation);
  const navTitle = [
    { key: "Home", label: "Home", href: "/" },
    { key: "Portfolio", label: "Portfolio", href: "/" },
    { key: "Resume", label: "Resume", href: "/" },
    { key: "Blog", label: "Blog", href: "/" },
  ];
  const [opened, { toggle }] = useDisclosure();
  const { hovered, ref } = useHover();
  // const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <>
      {/* <AppShell
        navbar={{
          //   width: 300,
          breakpoint: 300,
          collapsed: { mobile: !opened },
        }}
        padding="md"
      > */}
        <Box
          style={{
            boxShadow: "0 8px 4px rgba(200, 200, 200, 0.1)",
            background: "#0d0618",
            color: "white",
            border: "1px solid #A4A4A4",
            borderRadius: "35px",
          }}
        >
          <Group grow p="" mx="auto">
            <Burger
              color="white"
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div style={{ marginLeft: 30, display: "flex" }}>
              <lord-icon
                src="https://cdn.lordicon.com/vfbnsgud.json"
                trigger="loop"
                delay="1000"
                style={{ alignSelf: "center" }}
              />
              <h2 style={{}}>Lynn </h2>
            </div>

            {navTitle.map((item) => (
              <a
                href={item.href}
                key={item.key}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "10px",
                  borderBottom: "3px solid transparent", 
                  transition: "border-color 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#d017b8"; 
                  e.target.style.transform = "translateY(2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "transparent"; 
                  e.target.style.transform = "translateY(0px)";
                }}
              >
                {item.label}
              </a>
            ))}

            <div style={{ marginLeft: 100 }}>
              <button ref={ref} className={classes.button}>
                Contact Me
              </button>
            </div>
          </Group>
        </Box>

      {/* </AppShell> */}
    </>
  );
};

export default Navbar;
