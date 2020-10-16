import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to={`/card/${props.id}`} index={props.id}>
                    <p>Ver mais</p>
                </Link>
            </Info>
            
            <button>
                <img src={menuIcon} />
            </button>
        </Item>
    )
}