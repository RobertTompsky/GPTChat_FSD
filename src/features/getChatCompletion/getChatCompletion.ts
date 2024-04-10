import { IMessage } from '@/entities/chat/model';
import { openai } from '@/shared/api';

export const getChatCompletion = async (
    messages: IMessage[],
    newMessage: IMessage
) => {
    return openai.chat.completions.create({
        messages: [...messages, newMessage].map((message) => ({
            role: message.sender === 'user'
                ? 'user'
                : message.sender === 'system'
                    ? 'system'
                    : 'assistant',
            content: message.message
        })),
        model: 'gpt-3.5-turbo-16k-0613',
        max_tokens: 4000,
        temperature: 0.8
    });
};