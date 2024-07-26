import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};


const theme = extendTheme({
    config,
    fonts: {
        heading: "'Roboto",
        body: "'Roboto', sans-serif", // Fuente para el cuerpo del texto
    },
    colors: {
        brand: {
            primary: '#fdc964',
        },
    },
    styles: {
        global: (props) => ({
                'html, body': {
                backgroundColor: props.colorMode === 'light' ? 'white' : '#171716'
                },
        }),
    }

});

export default theme;