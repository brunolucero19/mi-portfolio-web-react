import { Text, Flex, Link } from "@chakra-ui/react"
import Title from "./Title"

const AboutMe = () => {
    const linkStyles = {
        fontWeight: '700',
        border: '1px solid',
        borderColor: 'brand.primary',
        borderRadius: '10px',
        fontSize: '12px',
        padding: '10px', 
        transition : 'all 1s',
        _hover: { backgroundColor: 'brand.primary' , textDecoration: 'none', }  // Estilo de hover
    }


    return(
        <Flex id="about" p={{ base: '40px 40px', md: '40px 120px' }} textAlign='center' flexDirection='column' alignItems='center' justifyContent='center'>
            <Title text='Mí' subrayado='Sobre'></Title>
            <Text p='10px' fontSize='14px' color='#00000099' lineHeight='1.5' mb='25px' w={{ base: '100%', xl: '80%', '2xl': '70%' }}>Hola, mi nombre es Bruno Lucero y tengo 21 años. Soy estudiante de la carrera Ingeniería en Sistemas de Información, en la Universidad Tecnológica Nacional y actualmente estoy en 3° año. Estoy realizando un curso de Desarrollo Web FullStack para mejorar mis habilidades y aprender nuevas tecnologías. Trabajo con HTML, CSS, JavaScript y React, y poseo conocimientos en bases de datos relacionales y Java. Mi objetivo en el futuro es poder trabajar en proyectos grandes y demostrar todas mis capacidades.</Text>
            <Flex gap='20px' alignItems='center' justifyContent='center'>
                <Link href='#proyectos' sx={linkStyles}>VER PROYECTOS</Link>
                <Link href='files/CV- Bruno Lucero.pdf' download='CV- Bruno Lucero.pdf' sx={linkStyles}>DESCARGAR CV</Link>
            </Flex>
        </Flex>
        

    )
}

export default AboutMe