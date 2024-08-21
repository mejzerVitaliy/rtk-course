import { createSlice } from "@reduxjs/toolkit";

interface ModalAddState{
    isModalOpen: boolean
}

const initialState: ModalAddState = {isModalOpen: false}

const sliceOfModalAdd = createSlice({
    name: 'modalAdd',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isModalOpen = !state.isModalOpen
            console.log(state.isModalOpen);
            
        }
    }
})

export const { toggleModal } = sliceOfModalAdd.actions
export default sliceOfModalAdd.reducer