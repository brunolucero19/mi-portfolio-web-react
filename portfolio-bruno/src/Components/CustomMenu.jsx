import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Box
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Link as ScrollLink} from 'react-scroll'

const CustomMenu = () => {
    const iconStyles = {
        color: 'brand.primary',
        fontSize: '40px',
        fontWeight: '700',
        bgColor: 'transparent',
        _hover: {bgColor: 'transparent'},
        _expanded: { bgColor: 'transparent' },
    }

    const menuListStyles = {
        border: 'none',
        padding: '0px',
    }

    const menuItemStyles = {
        padding: '8px',
        _hover: {bgColor: 'transparent'},
        _focus: { bgColor: 'transparent' },
        border: "1px solid",
        borderColor: 'brand.primary',
    }

    const linkStyles = {
        padding: '5px',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        _hover: {color: 'brand.primary', fontWeight: '500'},
        fontWeight: '500'
    }

    const links = [
        { to: 'inicio', label: 'INICIO' },
        { to: 'about', label: 'SOBRE MÍ' },
        { to: 'myskills', label: 'HABILIDADES' },
        { to: 'proyectos', label: 'PROYECTOS' },
        { to: 'experiencia', label: 'EXPERIENCIA' },
        { to: 'contacto', label: 'CONTACTO' },
    ];

    return(
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                sx={iconStyles}
            />
            <MenuList sx={menuListStyles}>
                {links.map((link,index) => (
                    <MenuItem sx={menuItemStyles} key={index}>
                        <Box sx={linkStyles}>
                            <ScrollLink to={link.to} smooth={true} duration={700}>
                                {link.label}
                            </ScrollLink>
                        </Box>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default CustomMenu