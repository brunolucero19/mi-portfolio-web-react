
import emailjs from 'emailjs-com'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    useDisclosure,
    useToast,
    Box
} from '@chakra-ui/react'

import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const ContactForm = ({contactButtonStyles}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Éste campo es requerido.'),
        email: Yup.string().email('Correo electrónico inválido').required('Éste campo es requerido.'),
        message: Yup.string().required('Éste campo es requerido.')
    });

    const sendEmail = (values, {resetForm}) => {
        emailjs.send('bruno_lucero19', 'plantilla_bruno_lucero', values, '_jQt_86rXPzX1MxQ9')
        .then((result) => {
        console.log("Resultado:" + result)
        toast({
            render: () => (
                <Box
                    bg="green.500"
                    color="white"
                    p='20px' 
                    borderRadius="5px"
                    boxShadow="lg"
                    width="100%"  
                    height="auto" 
                    display="flex"
                    alignItems="center"
                >
                    <CheckCircleIcon boxSize='16px' mr='10px' />
                    <span>Tu mensaje ha sido enviado exitosamente.</span>
                </Box>
            ),
            duration: 1500,
            position: 'top',
            
        });
        resetForm();
        onClose();
        }, (error) => {
        console.log("Error" + error)
        toast({
            render: () => (
                <Box
                    bg="red.500"
                    color="white"
                    p='20px' 
                    borderRadius="5px"
                    boxShadow="lg"
                    width="100%"  
                    height="auto" 
                    display="flex"
                    alignItems="center"
                >
                    <WarningIcon boxSize='16px' mr='10px' />
                    <span>Tu mensaje no pudo ser enviado. Intenta nuevamente más tarde.</span>
                </Box>
            ),
            duration: 1500,
            position: 'top',
        });
        });
    };

    const inputStyles = {
        borderRadius: '7px',
        border: '1px solid #ccc',
        p: '5px',
        mb: '5px',
        mt: '5px',
        _placeholder: {color: '#ccc'},
        _focus: {borderColor: 'brand.primary', boxShadow: 'outline'}
    }

    const whatsappButtonStyles = {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: 'white',
        bgColor: 'green.500',
        p: '10px',
        borderRadius: '7px',
        fontWeight: '700',
        _hover: { bgColor: 'green.600', border: '2px solid black' },
        _focus: { bgColor: 'green.500' },
    };

    return (
        <>
            <Button onClick={onOpen} sx={contactButtonStyles}>CONTÁCTAME</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent p='10px' maxWidth={{ base: '80%', md: '50%' }} borderRadius='7px' boxShadow="lg">
                    <ModalHeader fontSize="xl" fontWeight="700" mt='30px' ml='10px'>Contáctame</ModalHeader>
                    <ModalCloseButton position="absolute" right="20px" top="20px" _hover={{ color: 'red' }} />
                    <ModalBody m='10px'>
                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}
                            validationSchema={validationSchema}
                            onSubmit={sendEmail}
                        >
                            {({ errors, touched}) => (
                                <Form>
                                    <FormControl isInvalid={!!errors.name && touched.name} mb='20px'>
                                        <FormLabel>Nombre</FormLabel>
                                        <Field
                                            name="name"
                                            as={Input}
                                            placeholder='Ingrese su nombre'
                                            sx={inputStyles}
                                        />
                                        <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '14px'}} />
                                    </FormControl>
                                    <FormControl isInvalid={!!errors.email && touched.email} mb='20px'>
                                        <FormLabel>Correo Electrónico</FormLabel>
                                        <Field
                                            name="email"
                                            as={Input}
                                            type="email"
                                            placeholder='Ingrese su correo electrónico'
                                            sx={inputStyles}
                                        />
                                        <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '14px'}} />
                                    </FormControl>
                                    <FormControl isInvalid={!!errors.message && touched.message} mb='50px'>
                                        <FormLabel>Mensaje</FormLabel>
                                        <Field
                                            name="message"
                                            as={Textarea}
                                            placeholder='Ingrese su mensaje'
                                            sx={inputStyles}
                                        />
                                        <ErrorMessage name="message" component="div" style={{ color: 'red', fontSize: '14px'}} />
                                    </FormControl>
                                    <ModalFooter>
                                        <Button
                                            type="submit"
                                            color='black'
                                            bgColor='brand.primary'
                                            p='10px'
                                            borderRadius='7px'
                                            fontWeight='700'
                                            _hover={{ bgColor: 'brand.primary', border: '2px solid black' }}
                                            _focus={{ bgColor: 'brand.primary' }}
                                        >
                                            ENVIAR
                                        </Button>
                                    </ModalFooter>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                    <Button as="a" href="https://wa.me/+542612493532" target="_blank" rel="noopener noreferrer" sx={whatsappButtonStyles}>
                        Ir a WhatsApp
                    </Button>
                </ModalContent>
            </Modal>
        </>
    );
};

// Definir el tipo de las props
ContactForm.propTypes = {
    contactButtonStyles: PropTypes.object
};

export default ContactForm;
