import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export type TTodo = {
    id:number,
    title:string,
    completed:false
}

interface ITodosState{
    editModal:boolean,
    deleteModal:boolean,
    title:string,
    titleEdit:string,
    idxEdit:number,
    filt:string,
}

const initialState:ITodosState = {
    editModal:false,
    deleteModal:false,
    title:"",
    titleEdit:"",
    idxEdit:0,
    filt:"",
}

type TModalPayload = {
    name:"editModal" | "deleteModal",
    value:boolean
}

export const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    handleOpen (state:ITodosState,action:PayloadAction<TModalPayload>){
       state[action.payload.name] = action.payload.value
    },
    setFilt(state:ITodosState,action:PayloadAction<string>){
      state.filt = action.payload
    },
    setIdx(state:ITodosState,action:PayloadAction<number>){
      state.idxEdit = action.payload
    },
    setTitleEdit(state:ITodosState,action:PayloadAction<string>){
      state.titleEdit = action.payload
    },
    setTitle(state:ITodosState,action:PayloadAction<string>){
       state.title = action.payload
    }
  },
})

export const { handleOpen , setTitle , setIdx , setTitleEdit , setFilt  } = slice.actions

export default slice.reducer