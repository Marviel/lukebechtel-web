import AIMessage from './AIMessage'

export default function GenericAIMessage({ children }: React.PropsWithChildren<any>): any {
  return (
    <AIMessage showAvatar={false} nameOverride={'AI'}>
      {children}
    </AIMessage>
  )
}
