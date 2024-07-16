import React from 'react';
import { Box, Container, Heading, Text, VStack, Icon, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faGitAlt, faJsSquare, faReact, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import Title from './Title';
import './Skills.css'; 
import { NextArrow, PrevArrow } from './CustomArrows';


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
    backgroundColor: 'rgb(186, 126, 255)',
    
  },
  {
    icon: faGitAlt,
    title: 'Git',
    description: 'Conocimientos sobre los comandos básicos de Git para el control de versiones.',
    backgroundColor: 'rgb(255, 171, 72)',
  },
  {
    icon: faDatabase,
    title: 'Bases de Datos',
    description: 'Conocimientos del funcionamiento de una base de datos relacional, utilizando como motor de base de datos a PostgreSQL.',
    backgroundColor: 'rgb(176, 242, 172)',
  },
  {
    icon: faJava,
    title: 'Java',
    description: 'Conocimientos de la sintaxis de Java y el paradigma orientado a objetos.',
    backgroundColor: 'rgb(153, 127, 96)',
  },
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Agrupar los elementos de 4 en 4
  const groupedSkillsData = [];
  for (let i = 0; i < skillsData.length; i += 4) {
    groupedSkillsData.push(skillsData.slice(i, i + 4));
  }

  return (
    <Box as="section" id="myskills" p={{ base: '60px 50px', md: '60px 120px' }} textAlign="center">
      <Title text="Habilidades" subrayado="Mis"></Title>
      <Text p="20px" fontSize="14px" color="#00000099" lineHeight="1.5" mb="25px">
        Actualmente tengo conocimientos en las siguientes tecnologías. Mi objetivo es profundizar mis conocimientos en éstas y aprender nuevas tecnologías que me permitan seguir formándome como desarrollador.
      </Text>
      <Container width="100%">
        <Slider {...settings}>
          {groupedSkillsData.map((group, index) => (
            <Flex key={index} wrap="wrap" justify="center" className="skill-flex">
              {group.map((skill, skillIndex) => (
                <Box
                  key={skillIndex}
                  p={{ base: '20px', md: '30px'}}
                  bg={skill.backgroundColor}
                  borderRadius="5px"
                  boxShadow="0 4px 8px rgba(0,0,0,0.1)"
                  textAlign="left"
                  width={{ base: '80%', md: '45%', xl:'40%', '2xl': '35%' }}
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
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Skills;
