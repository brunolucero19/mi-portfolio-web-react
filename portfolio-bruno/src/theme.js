import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: "'Roboto",
        body: "'Roboto', sans-serif", // Fuente para el cuerpo del texto
    },
    colors: {
        brand: {
            primary: '#fdc964',
        },
    },

});

export default theme;