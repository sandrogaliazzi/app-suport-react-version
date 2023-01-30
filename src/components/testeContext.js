import React from "react";
import MessageProvider from "../context/MessageProviders";
import TestConsumer from "./TestConsumer";

export default function TesteContext() {

  return (
    <MessageProvider>
      <TestConsumer />
    </MessageProvider>
  )
}

