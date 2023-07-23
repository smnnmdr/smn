import React from 'react'
import { Footer, Navbar, Toolbar } from './component'

const Layout = ({children}:any) => {
    return (
        <div>
            <div><Navbar/></div>
            <div>
                {children}
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default Layout