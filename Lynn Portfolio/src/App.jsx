import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Navbar from './component/Navbar';
function App() {

  return (
    <MantineProvider>
     <Navbar />
      </MantineProvider>  )
}

export default App
