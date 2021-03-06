import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className='bg-green-600'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink
                    to='/' exact
                    activeClassName='text-white'
                    className='inflex-flex items-center py-6 px-3 mr-4 
                    text-white hover:text-green-200
                    text-4xl font-bold cursive tracking-widest'
                    >
                    Do
                    </NavLink>
                    <NavLink
                    to='/post'
                    activeClassName='text-green-100 bg-green-700'
                    className='inline-flex items-center py-3 px-3 my-6
                    rounded text-green-200 hover:text-green-800'
                    >
                    Blog Posts
                    </NavLink>
                    <NavLink 
                    to='/project' 
                    activeClassName='text-green-100 bg-green-700'
                    className='inline-flex items-center py-3 px-3 my-6 
                    rounded text-green-200 hover:text-green-800'>
                    Projects
                    </NavLink>
                    <NavLink 
                    to='/about' 
                    activeClassName='text-green-100 bg-green-700'
                    className='inline-flex items-center py-3 px-3 my-6
                    rounded text-green-200 hover:text-green-800'
                    >
                    About Me
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://github.com/TylerDo'
                    className='mr-4'
                    target='_blank'
                    fgColor='#fff'
                    style={{height: 35, width: 35}}
                    />
                    <SocialIcon url='https://my.indeed.com/p/tylerd-lpkd5io'
                    className='mr-4' 
                    target='_blank' 
                    fgColor='#fff' 
                    style={{height: 35, width: 35}}
                    />
                    <SocialIcon url='https://www.linkedin.com/in/tyler-do-482613200/' 
                    className='mr-4' 
                    target='_blank' 
                    fgColor='#fff' 
                    style={{height: 35, width: 35}}
                    />
                </div>
            </div>
        </header>
    );
};