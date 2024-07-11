import { Box, Flex, Text, Heading, Link, Image } from '@chakra-ui/react'
import ContactForm from './ContactForm'

const Hero = () => {


    return (
        <Flex id="inicio" as="section" direction={{ base: 'column', md: 'row' }} align="center" justify="space-evenly" p="40px" height='75vh' >
            <Box maxWidth='50%'>
                <Text fontSize='16px' color='gray'>Hola</Text>
                <Heading as="h1" fontSize='40px' fontWeight='700' m='10px 0'>Soy Bruno</Heading>
                <Heading as="h2" size="lg" fontSize='18px' fontWeight='400' margin='10px 0 30px' maxWidth='70%' >Freelance Web & UI/UX Designer</Heading>
                <ContactForm />
            </Box>
            <Image src="img/fotobrunoconfondo.png" alt="Bruno" display={{ base: 'none', md: 'block' }} maxWidth='50%' height='350px'/>
        </Flex>
    )
}

export default Hero