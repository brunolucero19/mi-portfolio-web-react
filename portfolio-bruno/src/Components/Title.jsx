import { Heading, Box } from "@chakra-ui/react"

const Title = ({text,subrayado}) => {

    return(
        <Heading as='h2' p='5px' fontSize='28px' fontWeight='700' mb='15px'><Box as="span" borderBottom='3px solid' borderBottomColor='brand.primary'>{subrayado}</Box> {text}</Heading>
    )
}

export default Title