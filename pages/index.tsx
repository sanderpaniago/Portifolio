import { useState, FormEvent } from 'react'
import { Text, Flex, Box, Heading, Button, Link, Icon, Image, List, ListItem, Avatar, CircularProgress, CircularProgressLabel, FormControl, FormLabel, Input, Textarea, InputLeftAddon, InputGroup, InputLeftElement, useToast } from '@chakra-ui/core'

import { FaGithub, FaInstagram, FaFacebookSquare, FaWhatsapp, FaNodeJs, FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa'

import ModalComp from '../components/ModalComp'

import axios from 'axios';

import 'dotenv'


export default function Home() {
  
  const api = axios.create({
      baseURL: process.env.NODE_ENV
  })
  const toast = useToast()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [assunto, setAssunto] = useState('')
  const [menssagem, setMessage] = useState('')

  const skills = [{
      icon: FaNodeJs,
      nome: 'Node.js',
      porcent: 50,
      size: '140px',
      color: '#3c873a',
      fundoColor: 'green'
    }, {
      icon: FaHtml5,
      nome: 'HTML5',
      porcent: 80,
      size: '140px',
      color: '#ec6231',
      fundoColor: 'orange'
    }, {
      icon: FaCss3,
      nome: 'CSS',
      porcent: 65,
      size: '140px',
      color: '#2062af',
      fundoColor: 'blue'
    }, {
      icon: FaReact,
      nome: 'React',
      porcent: 55,
      size: '140px',
      color: '#53c1de',
      fundoColor: 'cyan'
    },
    {
      icon: FaJs,
      nome: 'JavaScripit',
      porcent: 65,
      size: '140px',
      color: '#ffff47',
      fundoColor: 'yellow'
    }

  ]

  const skillsDesenvolv = [{
    icon: '/desenvolvimento.svg',
    title: 'Desenvolvimento de interface'
    }, {
      icon: '/prototipo.svg',
      title: 'Prototipagem',
    }, {
      icon: 'python-icon.svg',
      title: 'Automação com python'
    }
  ]

  const servicos = [
    'Formatação de desktop e notebooks',
    'Programação de webSite',
    'Infraestrutura residência',
    'Manutenção de desktop'
  ]

  function handleCreateSendEmail(e: FormEvent) {
    e.preventDefault();

     api.post('setEmail', {
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
      
       
     }).catch(function (error){ 
       console.log('erro', error.response ); 
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
      <Box  borderBottom='3px solid red'   h={['100%','100%','100%','100%']}>
        <Box  w='85%' d='flex' m='0 auto' >
          <Box 
            backgroundImage="url('/background.jpeg')"
            backgroundPosition='bottom'
            backgroundRepeat='no-repeat' 
            h='100vh'
            w='100%'
            position='absolute' 
            top='0'
            left='0'
            zIndex={-1}
            opacity={0.15}
          />
          <Flex  alignItems='center' flexDir={['column', 'column', 'row', "row"]} justify='space-between' p='8' w='95%' m='0 auto'>
            <Heading as='h1' fontFamily='Play' fontSize='6xl'>ForMac</Heading>
            <Flex borderBottom='3px solid red' pb={2} color='red.400' w={[ '100%',"80%", '50%', '350px']}  justify='space-around'>
              <Text color='gray.100' fontWeight='bold' fontSize='lg'>Siga-nos</Text>
              <Link target='_blank' alt='github' href='https://github.com/sanderpaniago'><Box w='8' h='8' as={FaGithub}/></Link>
              <Link target='_blank' alt='instagram' href='https://www.instagram.com/formaccr/'><Box w='8' h='8' as={FaInstagram} /></Link>
              <Link target='_blank' alt='facebook' href='https://www.facebook.com/formaccostarica'><Box w='8' h='8' as={FaFacebookSquare} /></Link>
              <Link target='_blank' alt='whatsapp' href='https://api.whatsapp.com/send?phone=5567996124946'><Box w='8' h='8'as={FaWhatsapp} /></Link>
            </Flex>
          </Flex>

        </Box>
        <Flex h='100%'  w='85%' margin='0 auto' mb='100px' flexDir={['column', 'column','row' , "row"]} alignItems='center' justify='space-between' >
            <Flex width={['85%','85','45%','45%' ]} mb={['8','8','0','0']} direction='column'>
              <Heading 
                fontFamily='Play' 
                maxW='350px' 
                color='red.500' 
                mb='50px' 
                textTransform='uppercase' 
                as='h2' fontSize={['2xl','2xl','3.8rem','4.8rem']}>ForMac Costa Rica</Heading>
              <Text 
                w={['100%','80%']} 
                fontSize={[ '1rem','1rem','1rem','1.2rem']}
                textTransform='uppercase'
                >Uma empresa dedicada a levar o melhor serviço e produto a seus clientes. </Text>

              
              <ModalComp />
            </Flex>

            <Flex direction='column' alignItems='center'  marginBottom={['95px','80px','0','0']} justifyContent='center' h='100%' width='350px'>
              <Heading as='h3' fontFamily='Play' mb='15px' fontSize={['xl','xl','2xl','2xl']} >Principais Serviços</Heading>
              <List as='ul' styleType='none'>
                {servicos.map((servico) =>(
                  <ListItem key={servico} mb='10px' pl='1' color='gray.600' fontSize={['md','md','1.2rem','1.2rem']} borderLeft='3px solid red'>{servico}</ListItem>
                ))}
              </List>
            </Flex>
        </Flex>
        </Box>
        <Box borderBottom='3px solid red'  backgroundColor='gray.500'>
          <Box d='flex' flexDir='column' alignItems='center' w='100%' justifyContent='center'>
            <Box mt='-70px' d='flex' backgroundColor='gray.500' w='190px' h='190px' alignItems='center' justifyContent='center' borderRadius='90%'>
              <Avatar  h='150px' w='150px' name='Sander paniago' src='/avatar.jpeg'/>
            </Box>
            <Heading color='#011C40' fontSize={['2xl','4xl','5xl','5xl']} as='h3'>Sander Pereira Paniago</Heading>
            <Text color='gray.600' fontWeight='bold' textTransform='uppercase' fontSize='sm'>desenvolvedor front-end</Text>

            <Text mt={6} textAlign='center' fontSize={['sm','sm','md','xl']} color='#011c40' w='85%'>Sou desenvolvedor front-end júnior, com uma paixão em estudar sobre a área, trabalhei por um tempo como técnico em TI, atualmente estou trabalhando com a tecnologia React principalmente para criação de webSites e web App. </Text>
          </Box >
          <Box d='flex' flexDir='column'w={['90%', '90%', '85%', '75%']} m={['5rem auto','8rem auto']}>
            <Heading fontFamily='Play' color='#011c40' textAlign='center' fontSize={['xl', 'xl','2xl','2xl']}>Minhas Skills</Heading>
            <Flex mt='8' justifyContent='space-between'>
              
              { skills.map((skill) => (
                <Box key={skill.nome} d='flex' flexDir='column' alignItems='center' justifyContent='center'>
                  <CircularProgress value={skill.porcent} fontSize={['60px', '75px' ,'120px', '120px']} color={skill.fundoColor}>
                    <CircularProgressLabel><Box color={skill.color} as={skill.icon}/></CircularProgressLabel>
                  </CircularProgress>
                  <Heading letterSpacing='1px' fontSize={['0.6rem','md', 'md', 'md']} mt={['1','5']} color={skill.color}>{skill.nome}</Heading>
                </Box>
              ))}
            </Flex>
          </Box>

          <Box d='flex' flexDir='column' w={['100%', '90%', '85%', '75%']} m='8rem auto'>
            <Heading fontFamily='Play' color='#011c40' textAlign='center' fontSize={['xl', 'xl','2xl','2xl']}>Skills em desenvolvimento</Heading>
            <Flex mt='8' justifyContent='space-between'>
              
              { skillsDesenvolv.map((skill) => (
                <Box key={skill.title} d='flex' flexDir='column' alignItems='center' justifyContent='center'>
                  <Image size={['40px', '65px' ,'100px', '100px']} alt={skill.title} src={skill.icon} ></Image>
                  <Heading w='80%' textAlign='center' fontSize={['0.6rem','md', 'md', 'md']} color='gray.600' mt='5'>{skill.title}</Heading>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>

        <footer>
          <Box w='85%' maxW='900px' m='45px auto'>
            <Heading fontFamily='Play' mb='5'>Entre em contato</Heading>
            <Box as='form' onSubmit={handleCreateSendEmail}>
              <Box d={{sm: 'block', md: 'flex'}} justifyContent='space-between'>
                <FormControl w={{sm: '100%' ,md:'60%'}} isRequired>
                    <FormLabel htmlFor='nome'>Seu nome</FormLabel>
                    <Input onChange={ (e) => { setNome(e.target.value)}} id='nome' placeholder='Digite sue nome...' />
                </FormControl>
                <FormControl w={{sm: '100%' ,md:'38%'}} isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<Icon name='email' color='gray.300' />} />
                      <Input type='email' onChange={ (e) => { setEmail(e.target.value)}} id='email' placeholder='Digite sue Email...' />
                    </InputGroup>
                </FormControl>
              </Box>
              <Box d={{sm: 'block', md: 'flex'}} justifyContent='space-between'>
                <FormControl w={{sm: '100%' ,md:'38%'}} isRequired>
                    <FormLabel htmlFor='telefone'>Telefone</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+55" />
                      <Input onChange={ (e) => { setTelefone(e.target.value)}} id='telefone' type='tel' roundedLeft='0' placeholder='Digite sue telefone...' />
                    </InputGroup>
                </FormControl>
                <FormControl w={{sm: '100%' ,md:'60%'}} isRequired>
                    <FormLabel htmlFor='assunto'>Assunto</FormLabel>
                    <Input onChange={ (e) => { setAssunto(e.target.value) }} id='assunto' placeholder='Digite so assunto...' />
                </FormControl>
              </Box>
              <FormControl isRequired>
                <FormLabel htmlFor='mensagem'>Sua mensagem</FormLabel>
                <Textarea onChange={ (e) => { setMessage(e.target.value)}}  id='mensagem' placeholder='Digite sua mensagem...' />
              </FormControl>

              <Button maxW='350px' fontSize={['1.0rem','1.0rem','1.2rem','1.2rem']} backgroundColor='red.500' h='70px' mt={['3','3','5','8']} type='submit'>Enviar sua mensagem</Button>
            </Box>

          </Box>
        </footer>
    </Box>
  )
}
