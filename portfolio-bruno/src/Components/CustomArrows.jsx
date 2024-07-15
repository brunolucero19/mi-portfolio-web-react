import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const PrevArrow = ({ className, style, onClick }) => (
    <IconButton
    icon={<FaArrowLeft />}
    onClick={onClick}
    position="absolute"
    top="50%"
    left={{ base: '-5%', xl: '0%', '2xl': '8%' }}
    transform="translateY(-50%)"
    zIndex="10"
    backgroundColor="rgba(253, 201, 100, 0.7)" // Fondo del botón
    color="white" // Color de la flecha
    borderRadius="50%" // Hace que el fondo sea un círculo
    _hover={{ backgroundColor: 'rgba(253, 201, 100, 1)' }} // Fondo al pasar el ratón
    p='5px'
    />
);

export const NextArrow = ({ className, style, onClick }) => (
    <IconButton
    icon={<FaArrowRight />}
    onClick={onClick}
    position="absolute"
    top="50%"
    right={{ base: '-5%', xl: '0%', '2xl': '8%' }}
    transform="translateY(-50%)"
    zIndex="10"
    backgroundColor="rgba(253, 201, 100, 0.7)" // Fondo del botón
    color="white" // Color de la flecha
    borderRadius="50%" // Hace que el fondo sea un círculo
    _hover={{ backgroundColor: 'rgba(253, 201, 100, 1)' }} // Fondo al pasar el ratón
    p='5px'
    />
);
