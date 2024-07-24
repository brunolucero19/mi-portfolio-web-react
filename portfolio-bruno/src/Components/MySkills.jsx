import {Box, Heading, Text, VStack, Icon, Flex} from '@chakra-ui/react'
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faGitAlt, faJsSquare, faReact, faNodeJs, faJava, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


const MySkills = () => {
    const skillsData = [
        {
            icon: faReact,
            title: 'React',
            description: 'Conocimientos en React para desarrollar aplicaciones web modernas y dinámicas.',
            backgroundColor: 'rgb(126, 186, 255)',
        },
        {
            icon: faJsSquare,
            title: 'JavaScript',
            description: 'Conocimientos en JavaScript para agregar interactividad y funcionalidad a las páginas web.',
            backgroundColor: 'rgb(255, 232, 126)',
        },
        {
            icon: faHtml5,
            title: 'HTML5',
            description: 'Conocimientos en HTML5 que me permiten desarrollar páginas web perfectamente estructuradas y ordenadas.',
            backgroundColor: 'rgb(230, 126, 255)',
        },
        {
            icon: faCss3Alt,
            title: 'CSS3',
            description: 'Conocimientos en CSS3 que me permiten dar un buen aspecto visual a mi estructura HTML y lograr los requerimientos del cliente.',
            backgroundColor: 'rgb(135, 255, 133)',
        },
        { 
            icon: faNodeJs,
            title: 'Node.js',
            description: 'Conocimientos en Node.js para el desarrollo de aplicaciones del lado del servidor.',
            backgroundColor: 'rgb(255, 171, 72)',
        },
        {
            icon: faGitAlt,
            title: 'Git',
            description: 'Conocimientos sobre los comandos básicos de Git para el control de versiones.',
            backgroundColor: 'rgb(94, 222, 197)',
        },
        {
            icon: faDatabase,
            title: 'Bases de Datos',
            description: 'Conocimientos del funcionamiento de una base de datos relacional, utilizando como motor de base de datos a PostgreSQL.',
            backgroundColor: 'rgb(171, 126, 88)',
        },
        {
            icon: faJava,
            title: 'Java',
            description: 'Conocimientos de la sintaxis de Java y el paradigma orientado a objetos.',
            backgroundColor: 'rgb(222, 94, 94)',
        },
        {
            icon: faBootstrap,
            title: 'Bootstrap 5',
            description: 'Conocimientos en Bootstrap 5, un framework que permite crear sitios web y aplicaciones móviles de manera rápida y sencilla.',
            backgroundColor: 'rgb(186, 126, 255)',
        },
        ];
    
        return (
            <Box as="section" id="myskills" p={{ base: '40px 40px', md: '40px 120px' }} textAlign="center">
                <Title text="Habilidades" subrayado="Mis"></Title>
                <Text p="20px" fontSize="14px" color="#00000099" lineHeight="1.5" mb="25px">
                    Actualmente tengo conocimientos en las siguientes tecnologías. Mi objetivo es profundizar mis conocimientos en éstas y aprender nuevas tecnologías que me permitan seguir formándome como desarrollador.
                </Text>
                <Flex wrap="wrap" justifyContent="center" gap='15px'>
                {skillsData.map((skill, skillIndex) => (
                    <Box
                    key={skillIndex}
                    p='20px'
                    bg={skill.backgroundColor}
                    borderRadius="5px"
                    boxShadow="0 4px 8px rgba(0,0,0,0.1)"
                    textAlign="left"
                    width={{ base: '90%', sm:'45%', lg:'30%', '2xl': '20%' }}
                    >
                    <VStack align="start" height="100%">
                        <Icon as={FontAwesomeIcon} icon={skill.icon} fontSize='32px' />
                        <Heading as="h3" size="md" fontSize='18px' fontWeight='700'>
                        {skill.title}
                        </Heading>
                        <Text fontSize='14px' color="rgba(0,0,0,0.8)">
                        {skill.description}
                        </Text>
                    </VStack>
                    </Box>
                ))}
            </Flex>
            </Box>
    )
}

export default MySkills