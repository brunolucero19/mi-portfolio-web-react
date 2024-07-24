import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Box,
    useDisclosure
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {scroller} from 'react-scroll'

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
        padding: '13px',
        _hover: {bgColor: 'transparent', color: 'brand.primary', fontWeight:'500'},
        _focus: { bgColor: 'transparent' },
        border: "1px solid",
        borderColor: 'brand.primary',
        fontWeight: '500'
    }

    const linkStyles = {
        width: '100%',
        textAlign: 'center',
    }

    const links = [
        { to: 'inicio', label: 'INICIO' },
        { to: 'about', label: 'SOBRE MÍ' },
        { to: 'myskills', label: 'HABILIDADES' },
        { to: 'proyectos', label: 'PROYECTOS' },
        { to: 'experiencia', label: 'EXPERIENCIA' },
        { to: 'contacto', label: 'CONTACTO' },
    ];

    const {isOpen, onOpen, onClose} = useDisclosure()

    const handleLinkClick = (to) => {
        scroller.scrollTo(to, {
            duration: 700,
            delay: 0,
            smooth: true,
            offset: -50
        })
        onClose()
    }

    return(
        <Menu> 
            <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                sx={iconStyles}
                onClick={isOpen? onClose : onOpen}
            />
            <MenuList sx={menuListStyles}>
                {links.map((link,index) => (
                    <MenuItem sx={menuItemStyles} key={index} onClick={() => handleLinkClick(link.to)}>
                        <Box sx={linkStyles}>
                            {link.label}
                        </Box>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default CustomMenu