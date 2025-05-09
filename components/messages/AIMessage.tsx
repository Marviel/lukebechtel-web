import Message from './Message'

export default function AIMessage({
  children,
  showAvatar = true,
  nameOverride,
  avatarUrlOverride,
}: React.PropsWithChildren<{
  showAvatar?: boolean
  nameOverride?: string
  avatarUrlOverride?: string
}>) {
  return (
    <Message
      name={nameOverride ?? 'GPT-4'}
      avatarUrl={
        showAvatar ? avatarUrlOverride ?? '/static/images/openai/gpt4-logo.svg' : undefined
      }
    >
      {children}
    </Message>
  )
}
