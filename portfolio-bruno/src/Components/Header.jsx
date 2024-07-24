import {Box, Flex} from '@chakra-ui/react'
import {Link as ScrollLink} from 'react-scroll'
import CustomMenu from './CustomMenu'

const Header = () => {
    const linkStyles = {
        fontWeight: '500',
        borderRadius: '10px',
        fontSize: '16px',
        padding: '10px',
        textDecoration: 'none', 
        transition : 'all 0.5s',
        cursor: 'pointer',
        _hover: { backgroundColor: '#fdc964', textDecoration: 'underline' }  // Estilo de hover
    };

    const links = [
        { to: 'inicio', label: 'Inicio' },
        { to: 'about', label: 'Sobre Mí' },
        { to: 'myskills', label: 'Habilidades' },
        { to: 'proyectos', label: 'Proyectos' },
        { to: 'experiencia', label: 'Experiencia' },
        { to: 'contacto', label: 'Contacto' },
    ];

    return(
        <Box as='header' p="0px 40px">
            <Flex as='nav' justify='space-between' align='center'>
                <Box as='p' color="brand.primary" fontSize='50px' fontWeight='700'>B.</Box>
                <Flex gap='10px' display={{ base: 'none', md: 'flex' }}>
                    {links.map((link, index) => (
                        <Box key={index} sx={linkStyles}>
                            <ScrollLink to={link.to} smooth={true} duration={700}>
                                {link.label}
                            </ScrollLink>
                        </Box>
                    ))}
                </Flex>
                <Box display={{base:'block', md:'none'}}>
                        <CustomMenu></CustomMenu>
                </Box>
            </Flex>
        </Box>


    )
}

export default Header