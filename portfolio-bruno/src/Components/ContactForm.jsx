import { useForm } from 'react-hook-form'
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


const ContactForm = ({contactButtonStyles}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const toast = useToast();
    console.log(errors)
    
    const sendEmail = (data) => {
        emailjs.send('bruno_lucero19', 'plantilla_bruno_lucero', data, '_jQt_86rXPzX1MxQ9')
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
        reset();
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
            <ModalOverlay/>
            <ModalContent p='10px' maxWidth={{ base: '80%', md: '50%' }} borderRadius='7px' boxShadow="lg">
                <ModalHeader fontSize="xl" fontWeight="700" mt='30px' ml='10px'>Contáctame</ModalHeader>
                <ModalCloseButton position="absolute" right="20px" top="20px" _hover={{color: 'red'}}/>
                <ModalBody m='10px'> 
                <form onSubmit={handleSubmit(sendEmail)}>
                    <FormControl isRequired mb='10px'>
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" {...register("name", { required: true })} placeholder='Ingrese su nombre' sx={inputStyles}/>
                    </FormControl>
                    <FormControl isRequired mb='10px'>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <Input type="email" {...register("email", { required: true })} placeholder='Ingrese su correo electrónico' sx={inputStyles} />
                    </FormControl>
                    <FormControl isRequired mb='30px'>
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea {...register("message", { required: true })} placeholder='Ingrese su mensaje' sx={inputStyles} />
                    </FormControl>
                <ModalFooter>
                    <Button type="submit" color='black' bgColor='brand.primary' p='10px' borderRadius='7px' fontWeight='700' _hover={{bgColor:'brand.primary', border: '2px solid black'}} _focus={{bgColor: 'brand.primary'}}>ENVIAR</Button>
                </ModalFooter>
                </form>
                </ModalBody>
                <Button as="a" href="https://wa.me/+542612493532" target="_blank" rel="noopener noreferrer" sx={whatsappButtonStyles}>
                    Ir a WhatsApp
                </Button>
            </ModalContent>
        </Modal>
        </>
    );
};

// Definir las validaciones de las props
ContactForm.propTypes = {
    contactButtonStyles: PropTypes.object
};

export default ContactForm;
