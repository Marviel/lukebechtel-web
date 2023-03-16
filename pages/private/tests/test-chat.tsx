import Message from '@/components/messages/Message'
import Thread from '@/components/messages/Thread'

export default function stuff() {
  return (
    <Thread>
      <Message key="1" name="GPT-4" avatarUrl="/static/images/openai/gpt4-logo.svg">
        Hello
      </Message>
      <Message key="2" isOwn>
        Wow
      </Message>
      <Message key="3" name="GPT-4" avatarUrl="/static/images/openai/gpt4-logo.svg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam
        ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut
        aliquam ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod,
        nunc ut aliquam ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed
        euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet
        nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl
        sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, nec aliquam
        nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, nec
        aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam
        nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl
        aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies,
        nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam
        ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut
        aliquam ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod,
        nunc ut aliquam ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed
        euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, nec aliquam nisl nisl sit amet
        nisl. Sed euismod, nunc ut aliquam ultricies, nunc
      </Message>
    </Thread>
  )
}
