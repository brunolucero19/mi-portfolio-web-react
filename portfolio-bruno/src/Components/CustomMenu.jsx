import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link, 
    IconButton
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'

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
        padding: '10px',
    }

    const menuItemStyles = {
        padding: '5px',
        _hover: {bgColor: 'transparent'},
        _focus: { bgColor: 'transparent' },
        border: "1px solid",
        borderColor: 'brand.primary'
    }

    const linkStyles = {
        padding: '5px',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        _hover: {color: 'brand.primary', fontWeight: '500'},
    }

    return(
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                sx={iconStyles}
            />
            <MenuList sx={menuListStyles}>
                <MenuItem sx={menuItemStyles}>
                    <Link href='#inicio' sx={linkStyles}>INICIO</Link>
                </MenuItem>
                <MenuItem sx={menuItemStyles}>
                    <Link href='#about' sx={linkStyles}>SOBRE MÍ</Link>
                </MenuItem>
                <MenuItem sx={menuItemStyles}>
                    <Link href='#myskills' sx={linkStyles}>HABILIDADES</Link>
                </MenuItem>
                <MenuItem sx={menuItemStyles}>
                    <Link href='#proyectos' sx={linkStyles}>PROYECTOS</Link>
                </MenuItem>
                <MenuItem sx={menuItemStyles}>
                    <Link href='#experiencia' sx={linkStyles}>EXPERIENCIA</Link>
                </MenuItem>
                <MenuItem sx={menuItemStyles}>
                    <Link href='#contacto' sx={linkStyles}>CONTACTO</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default CustomMenu