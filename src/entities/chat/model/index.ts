export { MODELS } from './data'

export {
    chatReducer,
    createChat,
    setChatActive,
    setGPTTyping,
    removeChat,
    addMessage,
    changeModel,
    getChatMessages,
    getGPTTyping
} from './slices/chatsSlice'

export type {
    IMessage,
    IChat,
    IChatBody,
    GPTModel,
    ModelObj
} from './types/index'

