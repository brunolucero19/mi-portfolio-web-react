import {Box, Flex, Link} from '@chakra-ui/react'
import CustomMenu from './CustomMenu'

const Header = () => {
    const linkStyles = {
        fontWeight: '500',
        borderRadius: '10px',
        fontSize: '16px',
        padding: '10px',
        textDecoration: 'none', 
        transition : 'all 0.5s',
        _hover: { backgroundColor: '#fdc964', textDecoration: 'underline' }  // Estilo de hover
    };


    return(
        <Box as='header' p="0px 40px">
            <Flex as='nav' justify='space-between' align='center'>
                <Box as='p' color="brand.primary" fontSize='50px' fontWeight='700'>B.</Box>
                <Flex gap='10px' display={{ base: 'none', md: 'flex' }}>
                    <Link href="#inicio" sx={linkStyles}>Inicio</Link>
                    <Link href="#about" sx={linkStyles} >Sobre Mí</Link>
                    <Link href="#myskills" sx={linkStyles}>Habilidades</Link>
                    <Link href="#proyectos" sx={linkStyles}>Proyectos</Link>
                    <Link href="#experiencia" sx={linkStyles}>Experiencia</Link>
                    <Link href="#contacto" sx={linkStyles}>Contacto</Link>
                </Flex>
                <Box display={{base:'block', md:'none'}}>
                        <CustomMenu></CustomMenu>
                </Box>
            </Flex>
        </Box>


    )
}

export default Header