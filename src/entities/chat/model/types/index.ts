export type IMessage = {
    message: string,
    sender: 'user' | 'gpt' | 'system'
}

export type IChat = {
    id: string
    name: string
    messages: IMessage[]
    isActive: boolean
}

export type IChatBody = Omit<IChat, 'id'>