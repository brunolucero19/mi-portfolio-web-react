import { Heading, Box } from "@chakra-ui/react"
import PropTypes from 'prop-types'

const Title = ({text,subrayado}) => {

    return(
        <Heading as='h2' p='5px' fontSize='28px' fontWeight='700' mb='15px'><Box as="span" borderBottom='3px solid' borderBottomColor='brand.primary'>{subrayado}</Box> {text}</Heading>
    )
}

Title.propTypes = {
    text : PropTypes.string,
    subrayado: PropTypes.string
}

export default Title