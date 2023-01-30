import React, { useState, useEffect, useContext } from "react";
import { getAllDocumentsByCollection } from "../dataBase/firestoreFunctions";

const MessageContext = React.createContext();

export const useMessageContext = () => useContext(MessageContext);

export default function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAllDocumentsByCollection("messages")
      .then(docs => setMessages(prevState => prevState = docs))
      .catch(error => console.error(`error on provider: ${error.message}`));
  }, []);

  return (
    <MessageContext.Provider value={messages}>
      {children}
    </MessageContext.Provider>
  )
}