import { IChat } from "@/entities/chat/model/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    list: IChat[]
}

const initialState: InitialState = {
    list: [{
        id: 'gdsgdsdgs-34324-sdfs',
        name: 'Дефолтный чат',
        messages: [],
        isActive: true
    }]
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        createChat: (state, action: PayloadAction<IChat>) => {
            state.list.push(action.payload)
        },
        removeChat: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(chat => chat.id !== action.payload);
        }
    }
})

export const chatReducer
    = chatSlice.reducer

export const {
    createChat,
    removeChat
} = chatSlice.actions