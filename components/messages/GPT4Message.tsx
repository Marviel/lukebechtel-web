import Message from './Message'

export default function GPT4Message({ children }: React.PropsWithChildren<any>) {
    return (
        <Message name="GPT-4" avatarUrl="/static/images/openai/gpt4-logo.svg">
            {children}
        </Message>
    )
}
