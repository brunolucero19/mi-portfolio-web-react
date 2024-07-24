import { Box, Flex, Text, Heading,  Image } from '@chakra-ui/react'
import ContactForm from './ContactForm'

const Hero = () => {
    const buttonStyles = {
        bgColor: 'brand.primary',
        borderRadius: '7px',
        fontWeight: '700',
        padding: '10px',
        _hover: { textDecoration: 'underline'},
        _focus: { bgColor: 'brand.primary'}
    }

    return (
        <Flex id="inicio" as="section" direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent={{ base: 'center', md: 'space-evenly' }} p={{ base: '40px 30px', md: '40px' }} height={{ base: '50vh', md: '75vh' }} >
            <Box maxWidth={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }} >
                <Text fontSize='16px' color='gray'>Hola</Text>
                <Heading as="h1" fontSize={{ base: '32px', md: '40px' }} fontWeight='700' m='10px 0'>Soy Bruno</Heading>
                <Heading as="h2" size="lg" fontSize={{ base: '14px', md: '18px' }} fontWeight='400' margin='10px 0 30px' maxWidth={{ base: '100%', md: '70%' }} >Freelance Web & UI/UX Designer</Heading>
                <ContactForm contactButtonStyles={buttonStyles}/>
            </Box>
            <Image src="img/fotobrunoconfondo.png" alt="Bruno" display={{ base: 'none', md: 'block' }} maxWidth='50%' height='350px'/>
        </Flex>
    )
}

export default Hero