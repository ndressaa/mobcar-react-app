import React from 'react'
import { Content, Header, Main, Footer, Title} from './styles'

import CarList from '../../components/CarList/index'

import logo from '../../assets/images/logo.svg'

export default function Landing() {
    return (
        <Content>
            <Header>
                <img src={logo} alt='Mobcar Logo'/>
            </Header>

            <Main>
                <Title>
                    <h1>Carros disponíveis:</h1>
                    <button>Adicionar</button>
                </Title>

                <CarList />

            </Main>

            <Footer>
                2020 &copy; Mobcar 
            </Footer>
        </Content>
    )
}