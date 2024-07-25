import { useState } from "react"
import { Box, Text, Flex, Button, Link, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import Title from "./Title"

const Projects = () => {
    const buttonStyles = {
        background : 'none',
        color: 'rgba(0,0,0,0.6)',
        fontSize: '16px',
        padding: '10px 16px',
        transition: 'color 0.3s',
        fontWeight: '600',
        _hover: {color: 'brand.primary', fontWeight: '600'},
        _focus: {bgColor: 'transparent' }
    }

    const activeButtonStyles = {
        color: 'brand.primary',
        fontWeight: '600'
    }

    const projects = [
        {
            id: 1,
            titles: {
                'Todos': 'Star Wars API',
                'Diseño UI': 'Formulario de registro',
                'Páginas Web': 'Star Wars API',
            },
            links: {
                'Todos': 'https://github.com/brunolucero19/star-wars-api-example',
                'Diseño UI': 'https://github.com/brunolucero19/register-form',
                'Páginas Web': 'https://github.com/brunolucero19/star-wars-api-example',
            },
            images: {
                'Todos': 'url(../img/gallery1.jpg)',
                'Diseño UI' : 'url(../img/gallery6.webp)',
                'Páginas Web' : 'url(../img/gallery1.jpg)',
            }
        },
        {
            id: 2,
            titles: {
                'Todos': 'Mi Portfolio Web hecho con React',
                'Diseño UI': 'Navbar UI',
                'Páginas Web': 'Mi Portfolio Web hecho con React',
            },
            links: {
                'Todos': 'https://github.com/brunolucero19/mi-portfolio-web-react',
                'Diseño UI': 'https://github.com/brunolucero19/navbar-ui',
                'Páginas Web': 'https://github.com/brunolucero19/mi-portfolio-web-react',
            },
            images: {
                'Todos': 'url(../img/gallery4.webp)',
                'Diseño UI' : 'url(../img/gallery2.jpg)',
                'Páginas Web' : 'url(../img/gallery4.webp)',
            }
        },
        {
            id: 3,
            titles: {
                'Todos': 'Formulario de registro',
                'Diseño UI': 'Diseño de login para una agencia de viajes',
                'Páginas Web': 'Mi Portfolio Web hecho con HTML y CSS',
            },
            links: {
                'Todos': 'https://github.com/brunolucero19/register-form',
                'Diseño UI': 'https://github.com/brunolucero19/image-based-web-project-login',
                'Páginas Web': 'https://github.com/brunolucero19/mi-portfolio-web-html-y-css',
            },
            images: {
                'Todos': 'url(../img/gallery6.webp)',
                'Diseño UI' : 'url(../img/gallery7.jpg)',
                'Páginas Web' : 'url(../img/gallery5.webp)',
            }
        },
        {
            id: 4,
            titles: {
                'Todos': 'Navbar UI',
                'Diseño UI': 'En Proceso',
                'Páginas Web': 'En Proceso',
            },
            links: {
                'Todos': 'https://github.com/brunolucero19/navbar-ui',
                'Diseño UI': '#',
                'Páginas Web': '#',
            },
            images: {
                'Todos': 'url(../img/gallery2.jpg)',
                'Diseño UI' : 'url(../img/gallery5.webp)',
                'Páginas Web' : 'url(../img/gallery8.jpg)',
            }
        },
        {
            id: 5,
            titles: {
                'Todos': 'Diseño de login para una agencia de viajes',
                'Diseño UI': 'En Proceso',
                'Páginas Web': 'En Proceso',
            },
            links: {
                'Todos': 'https://github.com/brunolucero19/image-based-web-project-login',
                'Diseño UI': '#',
                'Páginas Web': '#',
            },
            images: {
                'Todos': 'url(../img/gallery7.jpg)',
                'Diseño UI' : 'url(../img/gallery4.webp)',
                'Páginas Web' : 'url(../img/gallery2.jpg)',
            }
        },
        {
            id: 6,
            titles: {
                'Todos': 'Mi Portfolio Web hecho con HTML y CSS',
                'Diseño UI': 'Diseño de servicios de una agencia de viajes',
                'Páginas Web': 'Ta Te Ti',
            },
            links: {
                'Todos': 'https://github.com/brunolucero19/mi-portfolio-web-html-y-css',
                'Diseño UI': 'https://github.com/brunolucero19/image-based-web-project-services',
                'Páginas Web': 'https://github.com/brunolucero19/ta-te-ti',
            },
            images: {
                'Todos': 'url(../img/gallery5.webp)',
                'Diseño UI' : 'url(../img/gallery8.jpg)',
                'Páginas Web' : 'url(../img/gallery3.webp)',
            }
        },
        {
            id: 7,
            titles: {
                'Todos': 'Ta Te Ti',
                'Diseño UI': 'En Proceso',
                'Páginas Web': 'En Proceso',
            },
            links: {
                'Todos': 'https://github.com/brunolucero19/ta-te-ti',
                'Diseño UI': '#',
                'Páginas Web': '#',
            },
            images: {
                'Todos': 'url(../img/gallery3.webp)',
                'Diseño UI' : 'url(../img/gallery1.jpg)',
                'Páginas Web' : 'url(../img/gallery6.webp)',
            }
        },
        {
            id: 8,
            titles: {
                'Todos': 'Diseño de servicios de una agencia de viajes',
                'Diseño UI': 'En Proceso',
                'Páginas Web': 'En Proceso',
            },
            links: {
                'Todos': 'https://github.com/brunolucero19/image-based-web-project-services',
                'Diseño UI': '#',
                'Páginas Web': '#',
            },
            images: {
                'Todos': 'url(../img/gallery8.jpg)',
                'Diseño UI' : 'url(../img/gallery3.webp)',
                'Páginas Web' : 'url(../img/gallery7.jpg)',
            }
        },
    ]

    const [activeCategory, setActiveCategory] = useState('Todos')

    const filterProjects = (category) => {
        setActiveCategory(category);
    };

  // Chakra UI breakpoint para celulares 
    const isMobile = useBreakpointValue({ base: true, md: false })
    const columns = isMobile ? 1 : 3

  // Filtrar los proyectos para que solo muestre 3 en pantallas pequeñas
    const displayedProjects = isMobile ? projects.slice(0, 3) : projects;

// Lógica para determinar el tamaño de fila en función del breakpoint actual
    const getGridRow = (index) => {
        if (isMobile && (index === 1 || index === 5)) {
            return "span 2"; // Para pantallas pequeñas, todos los proyectos ocupan una sola fila
        } else {
            return index === 1 || index === 5 ? "span 3" : "span 2"; // Para otras pantallas, aplica la lógica actual
        }
    };

    return (
        <Box as="section" id="proyectos" textAlign='center' p={{ base: '40px 40px', md: '40px 120px' }} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Title text='destacados' subrayado='Proyectos'></Title>
            <Text p='10px' fontSize='14px' color='#00000099' lineHeight='1.5' mb='25px'>
                En ésta sección puedes ver mis proyectos más destacados, puedes filtrarlos por proyectos de diseño UI o por proyectos basados en páginas web.
            </Text>
            <Flex alignItems='center' justifyContent='center' gap='10px' mb='32px'>
                <Button sx={activeCategory === 'Todos' ? {...buttonStyles, ...activeButtonStyles} : buttonStyles} onClick={() => filterProjects('Todos')}>
                    Todos
                </Button>
                <Button sx={activeCategory === 'Diseño UI' ? {...buttonStyles, ...activeButtonStyles} : buttonStyles} onClick={() => filterProjects('Diseño UI')}> 
                    Diseño UI
                </Button>
                <Button sx={activeCategory === 'Páginas Web' ? {...buttonStyles, ...activeButtonStyles} : buttonStyles} onClick={() => filterProjects('Páginas Web')}>
                    Páginas Web
                </Button>
            </Flex>
            <SimpleGrid columns={columns} row={6} spacing='20px' height={{ base: '70vh', '2xl':'80vh' }} width={{ base: '80%', '2xl': '70%' }}>
            {displayedProjects.map((project, index) => (
                <Box
                    key={project.id}
                    borderRadius="7px"
                    bgImage={project.images[activeCategory]}
                    bgSize="cover"
                    bgPos="center"
                    gridRow={getGridRow(index)} 
                    position="relative"
                    _hover={{ transform: 'scale(1.1)', transition: 'transform 1s' }}
                    boxShadow="0 4px 8px rgba(0,0,0,0.3)"
                    height='auto'
                >
                    <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    bgColor="rgba(0, 0, 0, 0.6)"
                    color="white"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    opacity="0"
                    transition="opacity 0.3s ease"
                    borderRadius="7px"
                    _hover={{ opacity: 1 }}
                    >
                        <Text fontSize="16px" mb="8px">
                            {project.titles[activeCategory]}
                        </Text>
                        <Link href={project.links[activeCategory]} target="_blank" color="brand.primary" fontSize="16px" border="1px solid" p={2} borderRadius="5px" _hover={{ bg: 'brand.primary', color: '#333' }} padding="8px 16px" fontWeight='500'>
                            Ver Proyecto
                        </Link>
                    </Box>
                </Box>
            ))}
            </SimpleGrid>
        </Box>
    );
}


export default Projects