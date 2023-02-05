import React from "react";
import Modal from "./modal";

export default function QuickMsgModal({ sections }) {

  function mapQuickMessages() {
    const messages = [];

    sections.forEach(section => messages.push(...section.messages));

    return messages.filter(message => message?.quickMessage);
  }

  function renderQuickMessageList(quickMessage) {
    const { messageTitle, messageContent, id } = quickMessage;

    return (
      <li className="list-group-item d-flex justify-content-between align-items-start" key={id}>
        <div className="ms-2 me-auto">
          <div>
            <div className="fw-bold">{messageTitle}</div>
            <p style={{ whiteSpace: "pre-line", userSelect: "all" }}>{messageContent}</p>
          </div>      
        </div>
      </li>
    )
  }
  return (
    <Modal
      modalTitle="Mensagens Rápidas"
      isCentered={false}
      id="quickMsgModal"
      icon="bi bi-lightning-charge-fill"
      size="lg"
    >
      <div>
        <ul
          className="list-group"
          id="quickMessagesList"
        >
          {
            mapQuickMessages().map(renderQuickMessageList)
          }
        </ul>
      </div>
    </Modal>
  )
}
