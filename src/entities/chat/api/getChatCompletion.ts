import { GPTModel, IMessage } from '@/entities/chat/model';
import { openai } from '@/shared/api';

export const getChatCompletion = async (
    messages: IMessage[],
    newMessage: IMessage,
    model: GPTModel
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
        model: model,
        max_tokens: 4000,
        temperature: 0.8
    });
};