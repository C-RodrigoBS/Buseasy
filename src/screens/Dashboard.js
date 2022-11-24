import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Bienvenido</Header>
      <Paragraph>
        Escoger empresa
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Empresas')}
      >
        Escoger Empresa
      </Button>
    </Background>
  )
}
