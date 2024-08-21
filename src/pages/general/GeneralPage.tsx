import React, { useEffect } from 'react'
import Navbar from '../../shared/ui/navbar/Navbar'
import AddToDo from '../../shared/ui/buttons/AddToDo'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../features/modalAdd/sliceModalAdd'
import { RootState } from '../../app/providers/store'
import ModalAdding from '../../features/modalAdd/ModalAdding'

const GeneralPage:React.FC = () => {
    const dispatch = useDispatch()
    const isModalOpen = useSelector((state:RootState) => state.modalAdd.isModalOpen)

    const handleAddModal = () => {
        dispatch(toggleModal())
    }
    
    useEffect(() =>{
        console.log(isModalOpen);
        
    }, [])
    return (
        <main>
            <Navbar />


            <AddToDo onClick={handleAddModal} />
            
            {isModalOpen && <ModalAdding />}
        </main>
    )
}

export default GeneralPage