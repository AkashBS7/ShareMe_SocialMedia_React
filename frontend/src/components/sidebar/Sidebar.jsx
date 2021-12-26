import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import logo from '../../assets/logo.png';

export default function Sidebar({ user, closeToggle }) {

    const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
    const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 transition-all duration-200 ease-in-out capitalize'

    const handleCloseSideBar = () => {
        if(closeToggle) closeToggle(false);
    }

    const catergories = [
        { name:'Animals' },
        { name:'Wallpapers' },
        { name:'PhotoGraphy' },
        { name:'Gaming' },
        { name:'Coding' },
        { name:'Others' },
    ]

    return (
        <div className='flex flex-col justify-between bg-white h-full overflow-y-scrikk min-w-210 hide-scrollbar'>
            <div className='flex flex-col'>
                <Link to='/' className='flex px-5 gap-2 my-6 pt-1 w-190 items-center' onClick={() => handleCloseSideBar()}>
                    <img src={logo} alt='' className='w-full' />
                </Link>
                <div className='flex flex-col gap-5'>
                    <NavLink to='/' className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSideBar}>
                        <RiHomeFill />
                        Home
                    </NavLink>
                    <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover Catergories</h3>
                    {catergories.slice(0, catergories.length -1).map((category) => (
                        <NavLink to={`/category/${category.name}`} className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSideBar} key={category.name}>
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user && (
                <Link to={`user-profile/${user._id}`} className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3' onClick={handleCloseSideBar}>
                    <img src={user.image} className='w-10 h-10 rounded-full' alt=''/>
                    <p>{user.userName}</p>
                </Link>
            )}
        </div>
    )
}