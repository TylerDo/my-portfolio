import React from 'react';
import image from '../background.jpg';

export default function Home() {
    return (
        <main>
            <img 
            src={image} 
            alt='Background' 
            className='absolute object-cover w-full h-full' 
            />
            <section 
            className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'
            >
                <h1 
                className='text-6xl text-green-100 font-bold cursive leading-none lg:eading-snug home-name'>
                Welcome! I'm Tyler
                </h1>
            </section>
        </main>
    );
};