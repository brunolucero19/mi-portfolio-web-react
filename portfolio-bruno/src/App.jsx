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
import { useState } from 'react'

const App = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <ChakraProvider theme={theme}>
            <Header isModalOpen={isModalOpen}/>
            <Hero onModalOpen={openModal} onModalClose={closeModal} />
            <AboutMe />
            <MySkills />
            <Projects />
            <Experience />
            <ContactMe onModalOpen={openModal} onModalClose={closeModal}/>
            <Footer />
        </ChakraProvider>
    )
}

export default App 