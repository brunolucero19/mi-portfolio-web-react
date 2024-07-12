import React from 'react';
import { Box, Container, Heading, Text, VStack, Icon, Grid, GridItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faGitAlt, faJsSquare, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import Title from './Title';

const skillsData = [
  {
    icon: faHtml5,
    title: 'HTML5',
    description: 'Conocimientos en HTML5 que me permiten desarrollar páginas web perfectamente estructuradas y ordenadas.',
    backgroundColor: 'rgb(126, 186, 255)',
  },
  {
    icon: faCss3Alt,
    title: 'CSS3',
    description: 'Conocimientos en CSS3 que me permiten dar un buen aspecto visual a mi estructura HTML y lograr los requerimientos del cliente.',
    backgroundColor: 'rgb(255, 232, 126)',
  },
  {
    icon: faGitAlt,
    title: 'Git',
    description: 'Conocimientos sobre los comandos básicos de Git para el control de versiones.',
    backgroundColor: 'rgb(230, 126, 255)',
  },
  {
    icon: faDatabase,
    title: 'Bases de Datos',
    description: 'Conocimientos del funcionamiento de una base de datos relacional, utilizando como motor de base de datos a PostgreSQL.',
    backgroundColor: 'rgb(135, 255, 133)',
  },
  {
    icon: faJsSquare,
    title: 'JavaScript',
    description: 'Conocimientos en JavaScript para agregar interactividad y funcionalidad a las páginas web.',
    backgroundColor: 'rgb(255, 186, 126)',
  },
  {
    icon: faReact,
    title: 'React',
    description: 'Conocimientos en React para desarrollar aplicaciones web modernas y dinámicas.',
    backgroundColor: 'rgb(126, 255, 233)',
  },
  {
    icon: faNodeJs,
    title: 'Node.js',
    description: 'Conocimientos en Node.js para el desarrollo de aplicaciones del lado del servidor.',
    backgroundColor: 'rgb(186, 126, 255)',
  },
  {
    icon: faPython,
    title: 'Python',
    description: 'Conocimientos en Python para desarrollo de aplicaciones y análisis de datos.',
    backgroundColor: 'rgb(255, 126, 186)',
  },
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Agrupar los elementos de 4 en 4
  const groupedSkillsData = [];
  for (let i = 0; i < skillsData.length; i += 4) {
    groupedSkillsData.push(skillsData.slice(i, i + 4));
  }

  return (
    <Box as="section" id="myskills" p="60px 120px" textAlign="center">
      <Title text="Habilidades" subrayado="Mis"></Title>
      <Text p="10px" fontSize="14px" color="#00000099" lineHeight="1.5" mb="25px">
        Actualmente tengo conocimientos en las siguientes tecnologías. Mi objetivo es profundizar sobre las anteriores y descubrir nuevas.
      </Text>
      <Container width="100%">
        <Slider {...settings}>
          {groupedSkillsData.map((group, index) => (
            <Grid key={index} templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" gap="10px">
              {group.map((skill, skillIndex) => (
                <GridItem key={skillIndex} colSpan={1} rowSpan={1}>
                  <Box
                    p={6}
                    bg={skill.backgroundColor}
                    borderRadius="md"
                    boxShadow="md"
                    textAlign="left"
                    height="100%"
                  >
                    <VStack align="start" height="100%">
                      <Icon as={FontAwesomeIcon} icon={skill.icon} fontSize="24px" mb={4} />
                      <Heading as="h3" size="md" mb={2}>
                        {skill.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.700">
                        {skill.description}
                      </Text>
                    </VStack>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Skills;
