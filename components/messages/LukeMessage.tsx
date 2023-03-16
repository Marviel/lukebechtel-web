import Message from './Message'

export default function LukeMessage({ children }: React.PropsWithChildren) {
  return <Message isOwn>{children}</Message>
}
