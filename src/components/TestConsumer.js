import React from 'react'
import { useMessageContext } from '../context/MessageProviders'

export default function TestConsumer() {
  const messages = useMessageContext();
  return (
    <div>{console.log(messages)}</div>
  )
}
