import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme, } from "@mantine/core";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontFamily: "Verdana, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: "Greycliff CF, sans-serif" },
});
function App() {
  return (
    <MantineProvider
      theme={theme}
    >
      <Navbar />
      <Hero />
    </MantineProvider>
  );
}

export default App;
