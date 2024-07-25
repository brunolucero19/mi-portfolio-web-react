import { Box, Flex, Link, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import {Link as ScrollLink} from 'react-scroll'

const Footer = () => {

    const links = [
        { to: 'inicio', label: 'Inicio' },
        { to: 'about', label: 'Sobre Mí' },
        { to: 'myskills', label: 'Habilidades' },
        { to: 'proyectos', label: 'Proyectos' },
        { to: 'experiencia', label: 'Experiencia' },
    ]

    const offset = useBreakpointValue({base: -40, md: 20})

    return(
        <Box as="footer" p={{ base: '40px 30px', md: '40px 120px' }}>
            <Flex alignItems='center' justifyContent='center' gap='40px'>
                <Link target="_blank" href="https://github.com/brunolucero19">
                    <Flex flexDirection='column' alignItems='center'>
                        <Image src="../icons/github.svg" alt="GitHub" w='48px' h='48px'></Image>
                        <Text fontSize='12px'>GitHub</Text>
                    </Flex>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/bruno-lucero/">
                    <Flex flexDirection='column' alignItems='center'>
                        <Image src="../icons/linkedin.svg" alt="LinkedIn" w='48px' h='48px'></Image>
                        <Text fontSize='12px'>LinkedIn</Text>
                    </Flex>
                </Link>
            </Flex>
            <Flex alignItems='center' justifyContent='center' gap='30px' wrap="wrap" p='40px'>
                {links.map((link,index) => (
                    <Box key={index} sx={{_hover: {color: 'brand.primary', textDecoration:'underline', cursor:'pointer'}, fontWeight:'600'}}>
                    <ScrollLink to={link.to} smooth={true} duration={700} offset={offset}>
                        {link.label}
                    </ScrollLink>
                    </Box>
                ))}
            </Flex>

        </Box>
    )
}

export default Footer