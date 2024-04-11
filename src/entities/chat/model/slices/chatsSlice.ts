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
        isActive: true,
        isGPTTyping: false
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
        removeChat: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(chat => chat.id !== action.payload);
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
        setGPTTyping: (state, action: PayloadAction<boolean>) => {
            const currentChat = state.list.find((chat) => chat.isActive === true)
            if (currentChat) {
                currentChat.isGPTTyping = action.payload
            }
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
    changeModel,
    setGPTTyping
} = chatSlice.actions

export const getChats
    = (state: RootState) => state.chats.list

export const getChatMessages
    = (state: RootState) => state.chats.list
        .find((chat) => chat.isActive === true)
        ?.messages

export const getGPTTyping
    = (state: RootState) => state.chats.list
        .find((chat) => chat.isActive === true)
        ?.isGPTTyping