import Message from './Message'

export default function SystemMessage({
  children,
  nameOverride,
}: React.PropsWithChildren<{ nameOverride?: string }>) {
  return (
    <Message name={'System'} avatarUrl="/static/images/openai/gpt4-logo.svg">
      {children}
    </Message>
  )
}
