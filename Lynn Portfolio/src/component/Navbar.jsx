import React from "react";
import { Container, AppShell, Burger, Group, Skeleton,  Tabs, rem } from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import classes from '../Page.module.css';

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();
  const { hovered, ref } = useHover();

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
        //   width: 300,
          breakpoint: 320,
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
         <AppShell.Header style={{ boxShadow: "0 8px 4px rgba(200, 200, 200, 0.1)", width: 1000, background: "#0d0618", color: "white", border: "1px solid #A4A4A4", borderRadius: "30px", marginTop: 10, marginLeft: 30, }}>
          <Group h="100%" px="md" align="center" className={classes['input-mobile']}
>
            <Burger color="white" opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <div style={{ fontSize: 20, marginLeft: 12, cursor: "pointer", }}>De Xin</div>
            {/* Add navigation links here */}
            
       
            <div  style={{ marginLeft: 70, display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 70 }}> 
              
                <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
                  Home
                </a>
              </div>
              <div style={{ marginRight: 50 }}> 
                <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
                  Project
                </a>
              </div>
              <div style={{ marginRight: 50, }}>
                <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
                  Contact
                </a>
              </div>
              <div style={{marginLeft: 360}}>
                <button ref={ref} style={{
                    background:"#2e0a4d",
                     borderRadius: 30,}}>
                  Contact Me
                </button>
              
              </div>
            </div>
          </Group>
        </AppShell.Header>

        <AppShell.Main>Main Content</AppShell.Main>
      </AppShell>

  
    </>
  );
};

export default Navbar;
