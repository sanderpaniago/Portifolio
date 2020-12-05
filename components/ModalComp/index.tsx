import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    ButtonGroup,
    Link,
    Icon,
  } from "@chakra-ui/core";

import {FaInstagram, FaFacebookSquare, FaWhatsapp} from 'react-icons/fa'
import { redirect } from "next/dist/next-server/server/api-utils";

export default function ModalComp() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen} maxW='350px' fontSize={['1.4rem','1.4rem','1.6rem','1.6rem']} backgroundColor='red.500' h='70px' mt={['50px','70px','80px','80px']}>Entre em contato <Icon name='arrow-forward'/></Button>
  
        <Modal blockScrollOnMount = {false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Meios de Contato</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ButtonGroup w='100%' h='350px' d='flex' flexDir='column' alignItems='center' justifyContent='space-around'>
                <Button leftIcon="email" h='50px' w='100%' backgroundColor='red.400' _hover={{bg: 'red.600'}} variant="solid"><Link href='mailto:sanderppaniago@gmail.com'>Email</Link></Button>
                <Button leftIcon={FaWhatsapp} h='50px' w='100%' backgroundColor='red.400' _hover={{bg: 'red.600'}} variant="solid"><Link href='https://api.whatsapp.com/send?phone=5567996124946'>Whatsapp</Link></Button>
                <Button leftIcon={FaFacebookSquare} h='50px' w='100%' backgroundColor='red.400' _hover={{bg: 'red.600'}} variant="solid"><Link href='https://www.facebook.com/sander.pererapaniago'>Facebook</Link></Button>
                <Button leftIcon={FaInstagram} h='50px' w='100%' backgroundColor='red.400' _hover={{bg: 'red.600'}} variant="solid"><Link href='https://www.instagram.com/sander_paniago/'> Instagram</Link></Button>
              </ButtonGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }