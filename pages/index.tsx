import { useState, FormEvent, useEffect } from 'react'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { Text, Flex, Box, Heading, Button, Link, Icon, Avatar, FormControl, FormLabel, Input, Textarea, InputLeftAddon, InputGroup, InputLeftElement, useToast, Image } from '@chakra-ui/core'
import { FaGithub, FaInstagram, FaFacebookSquare, FaWhatsapp, FaNodeJs, FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa'
import { SiNextDotJs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import projects from '../projects.json'

import ModalComp from '../components/ModalComp'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/sanderpaniago')
  const avatar = await res.json()
  return {
    props: {
      avatar,
    },
  }
}

function Home({ avatar }: InferGetStaticPropsType<typeof getStaticProps>) {

  const router = useRouter()

  const toast = useToast()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [assunto, setAssunto] = useState('')
  const [menssagem, setMessage] = useState('')
  const [tamanhoTelaWidth, setTamanhotela] = useState(0)

  useEffect(()=> {
    setTamanhotela(window.innerWidth)

  }, [])


  function handleCreateSendEmail(e: FormEvent) {
    e.preventDefault();

    axios.post('/api/send-email', {
      nome,
      email,
      telefone,
      assunto,
      menssagem
    }).then(() => {
      toast({
        title: "Mensagem enviada.",
        description: "Sua mensagem foi enviada com sucesso!",
        status: "success",
        duration: 2000,
        isClosable: true,
      })


    }).catch(function (error) {
      console.log('erro', error.response);
      toast({
        title: "Falha ao enviar!",
        description: "Sua mensagem nao foi enviada, tente novamente mais tarde. Obrigado!",
        status: "error",
        duration: 2000,
        isClosable: true,

      })
    })
  }


  return (
    <Box w='100%'  >
      <Box borderBottom='3px solid red' d='flex' flexDir='column' minHeight='100vh' h={['100%', '100%', '100%', '100%']}>
        <Box w='85%' d='flex' m='0 auto' >
          <Box
            backgroundImage="url('/background.jpeg')"
            backgroundPosition='bottom'
            backgroundRepeat='no-repeat'
            backgroundSize="cover"
            h='100vh'
            w='100%'
            position='absolute'
            top='0'
            left='0'
            zIndex={-1}
            opacity={0.15}
          />
          <Flex alignItems='center' flexDir={['column', 'column', 'row', "row"]} justify='space-between' p='8' w='95%' m='0 auto'>
            <Image src='/icon-logo.svg' />
            <Flex borderBottom='3px solid red' pb={2} color='red.400' w={['100%', "80%", '50%', '350px']} justify='space-around'>
              <Text color='gray.100' fontWeight='bold' fontSize='lg'>Siga-me</Text>
              <Link target='_blank' alt='github' href='https://github.com/sanderpaniago'><Box w='8' h='8' as={FaGithub} /></Link>
              <Link target='_blank' alt='instagram' href='https://www.instagram.com/sander_paniago/'><Box w='8' h='8' as={FaInstagram} /></Link>
              <Link target='_blank' alt='facebook' href='https://www.facebook.com/sander.pererapaniago'><Box w='8' h='8' as={FaFacebookSquare} /></Link>
              <Link target='_blank' alt='whatsapp' href='https://api.whatsapp.com/send?phone=5567996124946'><Box w='8' h='8' as={FaWhatsapp} /></Link>
            </Flex>
          </Flex>

        </Box>
        <Flex w='85%' margin='0 auto' mb='100px' flexDir={['column', 'column', 'row', "row"]} marginTop='100px' maxW="1240px">
          <Flex width={['85%', '85', '45%', '45%']} mb={['8', '8', '0', '0']} direction='column'>
            <Heading fontSize='48px' textTransform='uppercase' alignItems='center' color='red.500' >
              Ola, Eu sou Sander
              </Heading>
            <Text fontWeight='bold' fontSize='xl'>Desenvolvedor front-end react.</Text>
            <ModalComp />
          </Flex>

        </Flex>
      </Box>
      <Box borderBottom='3px solid red' >
        <Box d='flex' flexDir='column' alignItems='center' w='100%' justifyContent='center' maxW="1240px" marginX="auto">
          <Box mt='-70px' d='flex' backgroundColor='gray.500' w='190px' h='190px' alignItems='center' justifyContent='center' borderRadius='90%'>
            <Avatar h='150px' w='150px' name='Sander paniago' src={avatar.avatar_url} />
          </Box>
          <Heading color='red.500' fontSize={['2xl', '4xl', '5xl', '5xl']} as='h3'>Sander Pereira Paniago</Heading>
          <Text color='white' fontWeight='bold' textTransform='uppercase' fontSize='sm'>desenvolvedor front-end</Text>

          <Text mt={6} textAlign='center' fontSize={['sm', 'sm', 'md', 'xl']} color='white' w='85%'>Sou desenvolvedor front-end júnior, com uma paixão em estudar sobre a área, trabalhei por um tempo como técnico em TI, atualmente estou trabalhando com a tecnologia React principalmente para criação de webSites e web App. </Text>
        </Box >

        <Box d='flex' flexDir='column' w={['100%', '90%', '85%', '75%']} m='8rem auto' maxW="1240px">
          <Heading fontFamily='Play' color='red.500' textAlign='center' fontSize={['2xl', '2xl', '3xl', '3xl']}>Algumas tecnologias que utilizo</Heading>
          <Flex mt='8' justifyContent='space-between' flexWrap='wrap'>
            <Swiper 
              slidesPerView={tamanhoTelaWidth < 1024 ? 2.5 : 5} 
              loop={true} zoom={true} 
              spaceBetween={18}  
              navigation
              pagination={{ clickable: true }}
              className='swiperSkills'
            >
              <SwiperSlide>
                <Box w='138px' h='146px' backgroundColor='#28282C' borderRadius='8px' >
                  <Box width='100%' h='70%' marginBottom='2' padding='2' marginTop='2'>
                    <FaReact size='full' />
                  </Box>
                  <Text fontWeight='bold' textAlign='center'>ReactJs</Text>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box w='138px' h='146px' backgroundColor='#28282C' borderRadius='8px' >
                  <Box width='100%' h='70%' marginBottom='2' padding='2' marginTop='2'>
                    <SiNextDotJs size='full' />
                  </Box>
                  <Text fontWeight='bold' textAlign='center'>NextJs</Text>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
              <Box w='138px' h='146px' backgroundColor='#28282C' borderRadius='8px' >
                <Box width='100%' h='70%' marginBottom='2' padding='2' marginTop='2'>
                  <FaCss3 size='full' />
                </Box>
                <Text fontWeight='bold' textAlign='center'>CSS3</Text>
              </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box w='138px' h='146px' backgroundColor='#28282C' borderRadius='8px' >
                  <Box width='100%' h='70%' marginBottom='2' padding='2' marginTop='2'>
                    <FaNodeJs size='full' />
                  </Box>
                  <Text fontWeight='bold' textAlign='center'>NodeJs</Text>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box w='138px' h='146px' backgroundColor='#28282C' borderRadius='8px' >
                  <Box width='100%' h='70%' marginBottom='2' padding='2' marginTop='2'>
                    <SiTypescript size='full' />
                  </Box>
                  <Text fontWeight='bold' textAlign='center'>TypeScript</Text>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box w='138px' h='146px' backgroundColor='#28282C' borderRadius='8px' >
                  <Box width='100%' h='70%' marginBottom='2' padding='2' marginTop='2'>
                    <SiTailwindcss size='full' />
                  </Box>
                  <Text fontWeight='bold' textAlign='center'>tailwindcss</Text>
                </Box>
              </SwiperSlide>
              
            </Swiper>
          </Flex>

          <Flex flexDir='column' marginTop='98px' w='100%'>
            <Heading marginBottom='10' fontFamily='Play' color='red.500' textAlign='center' fontSize={['2xl', '2xl', '3xl', '3xl']}>Alguns projetos publicados</Heading>
            <Box w='100%'>
            <Swiper slidesPerView={tamanhoTelaWidth < 1024 ? 1.2 : 3.2} spaceBetween={15} loop={true} navigation centeredSlides={true}>
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box d='flex' flexDir='column' maxWidth='300px' h='418px' backgroundColor='#28282C' w='full' p='4' borderRadius='4px' marginRight='4'>
                      <Image src={item.image} borderRadius='4px' h="40%" objectFit="cover" />
                      <Box h='60%' d='flex' flexDir="column">
                        <Heading fontSize='lg' textAlign='center' margin='3'>Palpite-Box</Heading>
                        <Text fontSize='sm' height='55%' overflow="hidden">{item.description}</Text>

                        <Button marginTop='auto' width="80%">
                          <Link href={item.linkRep} target="_blank" >Acesse o repositório</Link>
                        </Button>
                      </Box>
                      
                    </Box>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            </Box>
          </Flex>
        </Box>


      </Box>

      <footer>
        <Box w='85%' maxW='900px' m='45px auto'>
          <Heading fontFamily='Play' mb='5'>Entre em contato</Heading>
          <Box as='form' onSubmit={handleCreateSendEmail}>
            <Box d={{ sm: 'block', md: 'flex' }} justifyContent='space-between'>
              <FormControl w={{ sm: '100%', md: '60%' }} isRequired>
                <FormLabel htmlFor='nome'>Seu nome</FormLabel>
                <Input onChange={(e) => { setNome(e.target.value) }} id='nome' placeholder='Digite sue nome...' />
              </FormControl>
              <FormControl w={{ sm: '100%', md: '38%' }} isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<Icon name='email' color='gray.300' />} />
                  <Input type='email' onChange={(e) => { setEmail(e.target.value) }} id='email' placeholder='Digite sue Email...' />
                </InputGroup>
              </FormControl>
            </Box>
            <Box d={{ sm: 'block', md: 'flex' }} justifyContent='space-between'>
              <FormControl w={{ sm: '100%', md: '38%' }} isRequired>
                <FormLabel htmlFor='telefone'>Telefone</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+55" />
                  <Input onChange={(e) => { setTelefone(e.target.value) }} id='telefone' type='tel' roundedLeft='0' placeholder='Digite sue telefone...' />
                </InputGroup>
              </FormControl>
              <FormControl w={{ sm: '100%', md: '60%' }} isRequired>
                <FormLabel htmlFor='assunto'>Assunto</FormLabel>
                <Input onChange={(e) => { setAssunto(e.target.value) }} id='assunto' placeholder='Digite so assunto...' />
              </FormControl>
            </Box>
            <FormControl isRequired>
              <FormLabel htmlFor='mensagem'>Sua mensagem</FormLabel>
              <Textarea onChange={(e) => { setMessage(e.target.value) }} id='mensagem' placeholder='Digite sua mensagem...' />
            </FormControl>

            <Button maxW='350px' fontSize={['1.0rem', '1.0rem', '1.2rem', '1.2rem']} backgroundColor='red.500' h='70px' mt={['3', '3', '5', '8']} type='submit'>Enviar sua mensagem</Button>
          </Box>

        </Box>

        <Box d='flex' alignItems='center' justifyContent='center' background='#28282C' height='50px'>
          <Image src='/icon-logo.svg' />
        </Box>
      </footer>
    </Box>
  )
}

export default Home