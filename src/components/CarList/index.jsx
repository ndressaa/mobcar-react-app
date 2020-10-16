import React, { useReducer } from 'react'
import CarItem from '../CarItem'

export const CarContext = React.createContext()

const initialState = [
    {
        img: 'https://bit.ly/2FvR8Ru',
        name: 'Mercedes',
        year: '2015'
    },
    {
        img: 'https://bit.ly/37fMsLf',
        name: 'Lamborghini',
        year: '2017'
    },
    {
        img: 'https://bit.ly/3j2gUuq',
        name: 'Conversível',
        year: '2010'
    },
    {
        img: 'https://bit.ly/3k41lUb',
        name: 'Audi',
        year: '2018'
    }
]

const reducer = (state, action) => {
    switch (action) {
        default:
            return state
    }
}

export default function CarList() {

    const [cars, dispatch] = useReducer(reducer, initialState)

    return (
        <CarContext.Provider 
            value={{carsState: cars, carsDispatch: dispatch}}
        >
            {cars.map((car, index) => [
            <CarItem 
                    key={index}
                    id={index}
                    img={car.img} 
                    name={car.name} 
                    year={car.year}
                />]
            )}
        </CarContext.Provider>
    )
}