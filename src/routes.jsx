import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Card from './pages/Card'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing} />
            <Route path='/card' render={Card} />
        </BrowserRouter>
    )
}