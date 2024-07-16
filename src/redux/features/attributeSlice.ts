import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    infor: {},
    sizes: [],
    colors: [],
    sizeData:[],
    colorData:[],
    attributes:[]
}

const attributeSlice = createSlice({
    name:'attribute',
    initialState,
    reducers:{
        setInfor:(state,action)=>{
            state.infor = action.payload
        },
        setSizeData:(state,action)=>{
            state.sizeData = action.payload
        },
        setColorData:(state,action)=>{
            state.colorData = action.payload
        },
        addSize:(state,action)=>{
            state.sizes = [...state.sizes,action.payload]
            state.sizeData = state.sizeData.filter(item=> item.id !== action.payload.id)
        },
        removeSize:(state,action)=>{
            state.sizeData = [...state.sizeData,action.payload]
            state.sizes = state.sizes.filter(item=> item.id !== action.payload.id)
        },
        addColor:(state,action)=>{
            state.colors = [...state.colors,action.payload]
            state.colorData = state.colorData.filter(item=> item.id !== action.payload.id)
        },
        removeColor:(state,action)=>{
            state.colorData = [...state.colorData,action.payload]
            state.colors = state.colors.filter(item=> item.id !== action.payload.id)
        },
        setAttribute: (state,action)=>{
            state.attributes = action.payload
        },
        updateAttribute: (state,action)=>{
            const newAttribute = state.attributes.map((attribute)=> (attribute.color ==action.payload.color && attribute.size == action.payload.size)? action.payload : attribute )
            state.attributes = newAttribute
        },
    }
})

export const {setInfor,setSizeData,setColorData,addSize,removeSize,addColor,removeColor,setAttribute,updateAttribute} = attributeSlice.actions

export default attributeSlice.reducer