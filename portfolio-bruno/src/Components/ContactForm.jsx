
import React from 'react'
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
} from '@chakra-ui/react';



const ContactForm = ({contactButtonStyles}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const toast = useToast();

    
    const sendEmail = (data) => {
        emailjs.send('bruno_lucero19', 'plantilla_bruno_lucero', data, '_jQt_86rXPzX1MxQ9')
        .then((result) => {
        toast({
            title: "Tu mensaje ha sido enviado exitosamente.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: 'top',
        });
        reset();
        onClose();
        }, (error) => {
        toast({
            title: "Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.",
            status: "error",
            duration: 2000,
            isClosable: true,
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

    return (
        <>
        <Button onClick={onOpen} sx={contactButtonStyles}>CONTÁCTAME</Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay/>
            <ModalContent p='10px' maxWidth='50%' borderRadius='7px' boxShadow="lg">
                <ModalHeader fontSize="xl" fontWeight="700" mt='30px' ml='10px'>Contáctame</ModalHeader>
                <ModalCloseButton position="absolute" right="8px" top="10px" _hover={{color: 'red'}}/>
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
                    <FormControl isRequired mb='20px'>
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea {...register("message", { required: true })} placeholder='Ingrese su mensaje' sx={inputStyles} />
                    </FormControl>
                <ModalFooter>
                    <Button m='10px' bgColor='#fff' p='10px' borderRadius='7px' onClick={onClose} _hover={{color:'red' , bgColor:'#fff', border: '1px solid red'}}>
                        Cancelar
                    </Button>
                    <Button type="submit" m='10px' color='black' bgColor='brand.primary' p='10px' borderRadius='7px' fontWeight='700' _hover={{bgColor:'brand.primary', border: '2px solid black'}} _focus={{bgColor: 'brand.primary'}}>ENVIAR</Button>
                </ModalFooter>
                </form>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    );
};

export default ContactForm;
