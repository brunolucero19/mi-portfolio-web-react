import { Box, Flex, Link, Image, Text } from "@chakra-ui/react"

const Footer = () => {

    return(
        <Box as="footer" p={{ base: '40px 50px', md: '40px 120px' }}>
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
                <Link href="#inicio" _hover={{color:'brand.primary', textDecoration:'underline'}} fontWeight='600'>Inicio</Link>
                <Link href="#about" _hover={{color:'brand.primary', textDecoration:'underline'}} fontWeight='600'>Sobre Mí</Link>
                <Link href="#myskills" _hover={{color:'brand.primary', textDecoration:'underline'}} fontWeight='600'>Habilidades</Link>
                <Link href="#proyectos" _hover={{color:'brand.primary', textDecoration:'underline'}} fontWeight='600'>Proyectos</Link>
                <Link href="#experiencia" _hover={{color:'brand.primary', textDecoration:'underline'}} fontWeight='600'>Experiencia</Link>
            </Flex>

        </Box>
    )
}

export default Footer