import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './AboutMe'
import Home from './Home'
const RoutesList = () => {
    return (<>
        <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/aboutme' index element={<AboutMe />} />
        </Routes>
    </>)

}

export default RoutesList