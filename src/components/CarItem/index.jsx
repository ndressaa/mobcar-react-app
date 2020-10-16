import React from 'react'
import { Item, Info } from './styles'

import menuIcon from '../../assets/images/menuicon.svg'
// import { CarContext } from '../CarList'

export default function CarItem(props) {

    // const carContext = useContext(CarContext)

    return (
        <Item>
            <img src={props.img} alt={`Imagem do carro ${props.name}`}/>
            
            <Info>
                <h2>{props.name}</h2>
                <h3>{props.year}</h3>
                <p>Ver mais</p>
            </Info>
            
            <button>
                <img src={menuIcon} />
            </button>
        </Item>
    )
}