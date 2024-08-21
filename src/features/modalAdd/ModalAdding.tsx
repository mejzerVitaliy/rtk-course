import React from 'react'

interface ModalProps{

}

const ModalAdding:React.FC<ModalProps> = () => {
    return (
        <main className='bg-[#00000015] w-full h-full flex justify-center items-center z-50'>
            <section className='w-[280px] h-[400px] bg-gradient-to-r from-[#430f47] to-[#850359]'>
                <h1>Add new ToDo</h1>
            </section>
        </main>
    )
}

export default ModalAdding