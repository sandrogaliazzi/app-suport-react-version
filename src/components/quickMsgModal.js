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
      <div key={id}>
        <div className="fw-bold">{messageTitle}</div>
        <p style={{ whiteSpace: "pre-line", userSelect: "all" }}>{messageContent}</p>
      </div>
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
          className="list-group list-group-flush"
          id="quickMessagesList"
        >
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              {
                mapQuickMessages().map(renderQuickMessageList)
              }
            </div>
          </li>
        </ul>
      </div>
    </Modal>
  )
}
