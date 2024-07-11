import {Box, Flex, Link, Icon, transition} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const linkStyles = {
        fontWeight: '500',
        borderRadius: '10px',
        fontSize: '16px',
        padding: '10px',
        textDecoration: 'none', 
        transition : 'all 1s',
        _hover: { backgroundColor: '#fdc964' }  // Estilo de hover
    };

    return(
        <Box as='header' p="0px 40px">
            <Flex as='nav' justify='space-between' align='center'>
                <Box as='p' color="brand.primary" fontSize='50px' fontWeight='700'>B.</Box>
                <Flex gap='10px'>
                    <Link href="#inicio" sx={linkStyles}>Inicio</Link>
                    <Link href="#about" sx={linkStyles} >Sobre Mí</Link>
                    <Link href="#myskills" sx={linkStyles}>Habilidades</Link>
                    <Link href="#proyectos" sx={linkStyles}>Proyectos</Link>
                    <Link href="#experiencia" sx={linkStyles}>Experiencia</Link>
                    <Link href="#contacto" sx={linkStyles}>Contacto</Link>
                    <Icon as={FontAwesomeIcon} icon={faBars} display={{ base: 'block', md: 'none' }} fontSize="30px" color="brand.primary" />
                </Flex>
            </Flex>
        </Box>


    )
}

export default Header