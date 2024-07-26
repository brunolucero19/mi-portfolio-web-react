import { Box , Text, Flex, Heading, useBreakpointValue, useColorModeValue} from "@chakra-ui/react"
import Title from "./Title"

const Experience = () => {
    
    const boxBgColor = useColorModeValue('white', 'dark');
    const boxShadow = useColorModeValue('0 4px 8px rgba(0, 0, 0, 0.3)', '0 4px 8px rgba(255, 255, 255, 0.2)')
    const borderStyle = useColorModeValue('3px solid transparent', '1px solid white')

    const boxStyles = {
        border: borderStyle,
        textAlign: 'left',
        padding: '20px',
        boxShadow: boxShadow,
        transition: 'background-color 0.3s',
        _hover: {bgColor: 'rgb(254, 214, 138)', color: 'black'},
        bgColor: boxBgColor
    }
    const textStyles = {
        fontSize: '11px',
        color: useColorModeValue('rgba(0,0,0,0.6)','white'),
        padding: '5px'
    }
    const h3Styles = {
        fontSize: '14px',
        padding: '5px',
        fontWeight: '700',
    }
    const h4Styles = {
        fontSize: '12px',
        padding: '5px',
        fontWeight: '500',
    }
    
    const isMobile = useBreakpointValue({base: true , md:false})
    const flexStyles = isMobile ? 
    {flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'30px'}
    :
    {alignItems:'center', justifyContent:'space-between', gap:'40px'}

    const colorText = useColorModeValue('#00000099','white')
    
    return (
        <Flex id="experiencia" textAlign='center' p={{ base: '40px 40px', md: '40px 120px' }} flexDirection='column' alignItems='center' justifyContent='center'>
            <Title text='Laboral' subrayado='Experiencia'></Title>
            <Text p='10px' fontSize='14px' lineHeight='1.5' color={colorText} mb='40px'>
                En ésta sección puedes ver mi experiencia laboral, destacando mis últimos trabajos.
            </Text>
            <Flex sx={flexStyles} w={{base:'90%', '2xl':'70%'}}>
                <Box sx={boxStyles}>
                    <Text sx={textStyles}>Mes 0000-Mes 0000</Text>
                    <Heading as='h3' sx={h3Styles}>Puesto de trabajo</Heading>
                    <Heading as='h4' sx={h4Styles}>Nombre de empresa</Heading>
                    <Text sx={textStyles}>Descripción de las tareas realizadas y el puesto cubierto en éste trabajo.</Text>
                </Box>
                <Box sx={boxStyles}>
                    <Text sx={textStyles}>Mes 0000-Mes 0000</Text>
                    <Heading as='h3' sx={h3Styles}>Puesto de trabajo</Heading>
                    <Heading as='h4' sx={h4Styles}>Nombre de empresa</Heading>
                    <Text sx={textStyles}>Descripción de las tareas realizadas y el puesto cubierto en éste trabajo.</Text>
                </Box>
                <Box sx={boxStyles}>
                    <Text sx={textStyles}>Mes 0000-Mes 0000</Text>
                    <Heading as='h3' sx={h3Styles}>Puesto de trabajo</Heading>
                    <Heading as='h4' sx={h4Styles}>Nombre de empresa</Heading>
                    <Text sx={textStyles}>Descripción de las tareas realizadas y el puesto cubierto en éste trabajo.</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Experience