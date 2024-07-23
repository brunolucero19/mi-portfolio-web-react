import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import theme from './theme.js'
import AboutMe from './Components/AboutMe'
import Header from './Components/Header'
import Hero from './Components/Hero'
import MySkills from './Components/MySkills.jsx'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <AboutMe />
      <MySkills />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>,
)
