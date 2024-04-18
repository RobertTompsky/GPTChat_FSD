import { chatReducer } from "@/entities/chat/model";
import { authReducer } from "@/entities/user/model";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        chats: chatReducer,
        auth: authReducer
    }
})