import { GPTModel, IChat, IMessage } from "@/entities/chat/model/types";
import { RootState } from "@/shared/lib/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    list: IChat[],
    model: GPTModel
}

const initialState: InitialState = {
    list: [{
        id: 'gdsgdsdgs-34324-sdfs',
        name: 'Дефолтный чат',
        messages: [],
        isActive: true
    }],
    model: 'gpt-3.5-turbo-0125'
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        createChat: (state, action: PayloadAction<IChat>) => {
            const currentChat = state.list.find((chat) => chat.isActive === true)
            if (currentChat) {
                currentChat.isActive = false
            }

            state.list.push(action.payload)
        },
        setChatActive: (state, action: PayloadAction<string>) => {
            const currentChat = state.list.find((chat) => chat.isActive === true)
            if (currentChat) {
                currentChat.isActive = false
            }

            const targetChat = state.list.find((chat) => chat.id === action.payload)
            if (targetChat) {
                targetChat.isActive = true;
            }
        },
        removeChat: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(chat => chat.id !== action.payload);
        },
        addMessage: (state, action: PayloadAction<IMessage>) => {
            const currentChat = state.list.find((chat) => chat.isActive === true)
            if (currentChat) {
                currentChat.messages.push(action.payload)
            }
        },
        changeModel: (state, action: PayloadAction<GPTModel>) => {
            state.model = action.payload
        }
    }
})

export const chatReducer
    = chatSlice.reducer

export const {
    createChat,
    setChatActive,
    removeChat,
    addMessage,
    changeModel
} = chatSlice.actions

export const getChatMessages
    = (state: RootState) => state.chats.list
        .find((chat) => chat.isActive === true)
        ?.messages