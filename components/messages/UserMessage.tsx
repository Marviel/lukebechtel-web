import Message from './Message'

export default function UserMessage({ children }: React.PropsWithChildren) {
  return <Message isOwn>{children}</Message>
}
