import { chatReducer } from "@/entities/chat/model";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        chats: chatReducer
    }
})