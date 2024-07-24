import {Box, Flex} from '@chakra-ui/react'
import {Link as ScrollLink} from 'react-scroll'
import CustomMenu from './CustomMenu'
import PropTypes from 'prop-types'


const Header = ({isModalOpen}) => {
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

    const headerStyles = {
        p: { base: '0px 20px', md: '0px 40px' },
        position: isModalOpen ? 'static' : { base: 'fixed', md: 'static' }, 
        top: isModalOpen ? 'auto' : { base: '0', md: 'auto' }, 
        width: '100%',
        zIndex: isModalOpen ? 'auto' : { base: '1000', md: 'auto' },
        bg: isModalOpen ? 'transparent' : 'white'
    }

    return(
        <Box as='header' sx={headerStyles}>
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

Header.propTypes ={
    isModalOpen: PropTypes.bool
}


export default Header