import { Box, Heading} from "@chakra-ui/react"
import ContactForm from "./ContactForm"
import PropTypes from 'prop-types'

const ContactMe = ({onModalOpen, onModalClose}) => {

    const buttonStyles = {
        bgColor: 'white',
        borderRadius: '7px',
        fontWeight: '700',
        padding: '20px',
        _hover: { textDecoration: 'underline'},
        fontSize: '12px',
        _focus: { bgColor: 'white'}
    }

    return(
        <Box as="section" id="contacto" p={{ base: '30px 30px', md: '30px 120px' }} bgColor='brand.primary' textAlign='center'>
            <Heading as='h3' fontWeight='700' fontSize='20px' p='5px' mb='20px'>¿Tienes algún proyecto en mente?</Heading>
            <ContactForm contactButtonStyles={buttonStyles} onModalOpen={onModalOpen} onModalClose={onModalClose}/>
        </Box>
    )
}

ContactMe.propTypes = {
    onModalOpen: PropTypes.func,
    onModalClose: PropTypes.func
}

export default ContactMe