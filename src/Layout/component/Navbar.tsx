import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [classNameValue, setClassNameValue] = useState('')
    const menuClick = () => {
        setClassNameValue('')
    }
    return <div className='toolbar '>
        <div className='toolbar-items'>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/aboutme' >About me </Link>
                </li>
                <li>
                    <Link to='/hobbies' >Hobbies </Link>
                </li>
            </ul>
        </div>
        <div className={'button-menu ' + classNameValue} onClick={menuClick}>
            Menu
            <div className='submenu-horizontal'>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/aboutme' >About me </Link>
                    </li>
                    <li>
                        <Link to='/hobbies' >Hobbies </Link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
}
export default Navbar