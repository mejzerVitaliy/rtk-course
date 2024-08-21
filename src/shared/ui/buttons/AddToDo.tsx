import React from 'react'

interface AddToDoProps {
    onClick: () => void
}

const AddToDo:React.FC<AddToDoProps> = ({onClick}) => {
    return (
        <button onClick={onClick} className='fixed bottom-[20px] right-[20px] p-0 w-[70px] h-[70px] rounded-full flex items-center justify-center border-solid border border-white  text-white text-2xl bg-gradient-to-r from-[#430f47] to-[#850359]'>
            <span className='m-0 p-0'>+</span>
        </button>
    )
}

export default AddToDo