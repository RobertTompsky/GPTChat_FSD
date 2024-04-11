export { MODELS } from './data'

export {
    chatReducer,
    createChat,
    setChatActive,
    removeChat,
    addMessage,
    changeModel,
    getChatMessages
} from './slices/chatsSlice'

export type {
    IMessage,
    IChat,
    IChatBody,
    GPTModel,
    ModelObj
} from './types/index'

