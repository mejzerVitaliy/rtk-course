import React from 'react'

const Navbar:React.FC = () => {
    return (
        <header className='fixed top-0 w-full text-white text-lg h-[70px] bg-gradient-to-r from-[#430f47] to-[#850359]'>
            <section className='m-0 p-0 flex justify-center items-center'>
                <h1 className='m-0 p-0 leading-none'>ToDoShka</h1>
            </section>
            
        </header>
    )
}

export default Navbar